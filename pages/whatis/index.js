/**
 * The tags page shows the user a list of tags. 
 * These are links and filter out articles that 
 * include that tag. 
 * @returns ReactComponent Page
 */

import { tagsContainer, tagsList } from "../../styles/tags.module.css";
import tags from "../../data/whatis";
import Description from "./whatisDescription.md"

export default function () {
    return (
        <div className={tagsContainer}>
            <h1>"What is" by tags</h1>
            <Description />
            <ul className={tagsList}>
                {tags.map(tag => <TagItem key={tag?.title || tag} {...{ tag }} />)}
            </ul>
        </div>
    );
}

export function TagItem({ tag }) {
    let title = tag;
    if (tag?.introUrl) {
        title = <a href={tag?.introUrl}>{tag?.title}</a>
    }
    // return <li>{title}<sub>{tag?.description}</sub></li>
    return <li>{title}</li>
}