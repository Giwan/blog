import Link from "next/link";
import ArticleHeader from "../Article/ArticleHeader";
import styles from "./articleItem.module.css";

const ArticleItem = ({
    post: {
        link,
        module: { meta },
    },
}) => (
    <article className={styles.articleItem}>
        <Link href={"/blog" + link}>
            <a>
                <ArticleHeader meta={meta} />
            </a>
        </Link>
    </article>
);

export default ArticleItem;
