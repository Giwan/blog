import React from "react";
import ArticleItem from "../components/ArticleItem/ArticleItem";
import { posts } from "../getAllPosts";
import { articleListContainer } from "./index.module.css";
import { sortPostsByDate } from "../utils/helpers";

const isDevelopment = () => process.env.NODE_ENV === "development";
const PUBLISHED = "published";
const DATE_CREATED = "createdDate";

const postsWithMeta = p => Boolean(p.module.meta);
const postsWithMetaAndPublished = (p) => p.module.meta && !!p.module.meta.published

/**
 * Filters out the published posts in production
 * In development both published and drafts
 * should be available.
 * 
 * @param {Array} posts List of posts to filter
 * @returns 
 */
export const publishedPosts = (posts = []) => {
    if (!isDevelopment()) return posts.filter(postsWithMetaAndPublished).sort(sortPostsByDate(PUBLISHED));
    return posts.filter(postsWithMeta).sort(sortPostsByDate(DATE_CREATED));
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
