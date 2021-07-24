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
                {!isBlogPost && (
                    <button className={readButton}>
                        <svg
                            width="8"
                            height="12"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                                fill="#828282"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className={styles.articleHeaderSummary}>
                {isBlogPost ? null : <p>{meta.description}</p>}
            </div>
        </div>
    );
};

export default ArticleHeader;
