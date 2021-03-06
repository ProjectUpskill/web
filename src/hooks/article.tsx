import { ImageProps } from "react-bootstrap";
import { useRemark, UseRemarkOptions, useRemarkSync } from "react-remark";
import useSWR from "swr";
import sectionize from "../lib/sectionize";
import { Article } from "@projectupskill/common/models";
import { useEffect, useMemo } from "react";

type h1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function useArticle(id: string, remark: boolean = true) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Article>(
    `https://api.projectupskill.org/article/${id}`,
    fetcher
  );

  const currentVersion = useMemo(() => {
    const versions = data?.versions || [];
    if (versions.length > 0) return versions[0];
    return undefined;
  }, [data]);

  const content = useMemo(() => currentVersion?.content, [currentVersion]);
  const sidebar = useMemo(() => currentVersion?.sidebar, [currentVersion]);
  const type = useMemo(() => data?.type || "article", [data?.type]);

  const remarkOptions: UseRemarkOptions = {
    remarkPlugins: [sectionize],
    rehypeReactOptions: {
      components: {
        h1: (props: h1Props) => (
          <h1 {...props}>
            {Object.values(props)}{" "}
            <a href={`/console/edit-${type}/${id}`}>✏️</a>
          </h1>
        ),
        img: (props: ImageProps) => (
          <img {...props} width={"100%"} height={300} object-fit="cover" />
        ),
      },
    },
  };

  const [reactContent, setReactContent] = useRemark(remarkOptions);

  useEffect(() => {
    if (content && remark) setReactContent(content);
  }, [content, remark, setReactContent]);

  const [reactSidebar, setReactSidebar] = useRemark(remarkOptions);

  useEffect(() => {
    if (sidebar && remark) setReactSidebar(sidebar);
  }, [sidebar, remark, setReactSidebar]);

  return {
    article: data,
    error,
    content,
    sidebar,
    reactContent,
    reactSidebar,
  };
}
