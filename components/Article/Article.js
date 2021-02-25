import ArticleHeader from "./ArticleHeader";
import styles from "./article.module.css";

const Article = ({ children, meta }) => (
    <article className={styles.article}>
        <ArticleHeader meta={meta} isBlogPost />
        {children}
    </article>
);

export default Article;
