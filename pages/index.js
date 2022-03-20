import React from "react";
import ArticleItem from "../components/ArticleItem/ArticleItem";
import { posts } from "../getAllPosts";
import { articleListContainer } from "./index.module.css";
import { sortPostsByDate } from "../utils/helpers";

/**
 * Filters out the published posts
 * @param {Array} posts List of posts to filter
 * @returns 
 */
export const publishedPosts = (posts = []) => {
    const filteredPosts = posts.filter(
        (p) => p.module.meta && !!p.module.meta.published
    );
    return filteredPosts.sort(sortPostsByDate);
};

const Index = function () {
    return (
        <div className={articleListContainer}>
            {publishedPosts(posts).map((post) => (
                <ArticleItem key={post.link} post={post} />
            ))}
        </div>
    );
}

export default Index;
