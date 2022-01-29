import { useRemarkSync } from "react-remark";
import useSWR from "swr"
import sectionize from "../lib/sectionize";

type h1Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function useArticle(id: string) {
  const fetcher = (url: string) => fetch(url).then(res => res.text())
  const { data, error } = useSWR(`/articles/${id}.md`, fetcher)

  const text = (error ? "Article failed to load." :
    (data ? data : "Loading article..."))

  const reactContent = useRemarkSync(text, {
    remarkPlugins: [sectionize],
    rehypeReactOptions: {
      components: {
        h1: (props: h1Props) => <h1{...props}>{Object.values(props)} <a href={`/edit-article/${id}`}>✏️</a></h1>,
        /*img: (props) => (
          <Image
            {...props}
            layout="responsive"
            width={680}
            height={300}
            objectFit="cover"
          />
        ),*/
      },
    },
  });

  return reactContent;
}