import ArticleHeader from "./ArticleHeader";
import styles from "./article.module.css";

const Article = ({ children, meta }) => (
    <div className={styles.article}>
        <ArticleHeader meta={meta} isBlogPost />
        <article>{children}</article>
    </div>
);

export default Article;
