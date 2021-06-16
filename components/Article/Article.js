import ArticleHeader from "./ArticleHeader";
import { article } from "./article.module.css";

const Article = ({ children, meta }) => (
    <article className={article}>
        <ArticleHeader meta={meta} isBlogPost />
        {children}
    </article>
);

export default Article;
