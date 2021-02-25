/**
 * Tis header post is being used in two places
 * The post item on the listing page.
 * The detail page showing the blog article
 *
 * The description for example is not required
 * on the detail page
 */
import styles from "./articleHeader.module.css";

const ArticleHeader = ({ meta, isBlogPost }) => {
    if (!meta.published) return null;
    return (
        <div className={styles.articleItem}>
            <header className={styles.articleHeader}>
                {isBlogPost ? (
                    <h1 className={styles.articleHeaderh1}>{meta.title}</h1>
                ) : (
                    <h2 className={styles.articleItemHeader}>{meta.title}</h2>
                )}
            </header>
            <div className={styles.articleHeaderMetaDetails}>
                <span>{new Date(meta.published).toDateString()}</span>
                <span>{meta.readTime + " min read"}</span>
            </div>
            <div className={styles.articleHeaderSummary}>
                {isBlogPost ? null : <p>{meta.description}</p>}
            </div>
        </div>
    );
};

export default ArticleHeader;
