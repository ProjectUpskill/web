import styles from "../../styles/sidebar/Sidebar.module.scss";
interface Props {
  content: React.ReactNode;
  name: string;
  desc: string;
  star: boolean;
}

export default function MarkdownBox({ content, name, desc, star }: Props) {
  return (
    <div
      className={star ? `${styles.sidebarBoxStarred}` : `${styles.sidebarBox}`}
    >
      <div
        className={
          star ? `${styles.title} ${styles.titleStarred}` : `${styles.title}`
        }
      >
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      {content}
    </div>
  );
}
