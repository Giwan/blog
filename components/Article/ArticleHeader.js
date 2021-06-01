/**
 * Tis header post is being used in two places
 * The post item on the listing page.
 * The detail page showing the blog article
 *
 * The description for example is not required
 * on the detail page
 */
import styles, { readButton } from "./articleHeader.module.css";

const dateOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
};

const ArticleHeader = ({ meta, isBlogPost }) => {
    if (!meta.published) return null;
    const dateOptionsFiltered = {
        ...dateOptions,
        weekday: isBlogPost ? "long" : undefined,
    };
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
                <span>{meta.readTime + " minutes"}</span>
                <span>
                    {new Date(meta.published).toLocaleDateString(
                        "en-GB",
                        dateOptionsFiltered
                    )}
                </span>
                {!isBlogPost && <button className={readButton}>read</button>}
            </div>
            <div className={styles.articleHeaderSummary}>
                {isBlogPost ? null : <p>{meta.description}</p>}
            </div>
        </div>
    );
};

export default ArticleHeader;
