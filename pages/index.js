import ArticleItem from "../components/ArticleItem/ArticleItem";
import { posts } from "../getAllPosts";
import { articleListContainer } from "./index.module.css";
import { getDateNumber } from "../utils/helpers";

export const sortPostsByDate = (p1, p2) => {
    const [date1, date2] = [p1, p2].map((date) =>
        getDateNumber(date.module.meta.published)
    );

    return date2 - date1;
};

export const publishedPosts = (posts = []) => {
    const filteredPosts = posts.filter(
        (p) => p.module.meta && !!p.module.meta.published
    );
    return filteredPosts.sort(sortPostsByDate);
};

export default function () {
    return (
        <div className={articleListContainer}>
            {publishedPosts(posts).map((post) => (
                <ArticleItem key={post.link} post={post} />
            ))}
        </div>
    );
}
