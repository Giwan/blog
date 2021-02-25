import PostItem from "../components/PostItem";
import { posts } from "../getAllPosts";
import styles from "./index.module.css";
import { getDateNumber } from "../utils/helpers";

export const sortPostsByDate = (p1, p2) => {
    const [date1, date2] = [p1, p2].map((date) =>
        getDateNumber(date.module.meta.published)
    );

    return date2 - date1;
};

export const publishedPosts = (posts = []) => {
    let filteredPosts = posts.filter(
        (p) => p.module.meta && !!p.module.meta.published
    );
    filteredPosts.sort(sortPostsByDate);
    return filteredPosts;
};

export default function IndexPage() {
    return (
        <div className={styles.articleListContainer}>
            {publishedPosts(posts).map((post) => (
                <PostItem key={post.link} post={post} />
            ))}
        </div>
    );
}
