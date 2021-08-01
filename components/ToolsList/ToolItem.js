import React from "react";
import styles, { toolsItemFooter, categoryStyle, toolsItemLabel } from "../../styles/tools.module.css";

/**
 * The tools item. This is basically a page item for that tool.
 *
 */
const ToolItem = ({ tool }) => (
    <article className={styles.toolsItem}>
        <a
            href={tool.url}
            target="_blank"
            rel="norel noreferrer"
            alt={`${tool.title} - ${tool.description}`}
        >
            <label className={categoryStyle}>{tool.category}</label>
            <h2 className={styles.toolsItemTitle}>{tool.title}</h2>
            <span className={styles.toolDescription}>{tool.description}</span>
        </a>
        <footer className={toolsItemFooter}>
            {Array.isArray(tool.labels) &&
                tool.labels.map((label) => (
                    <label key={label + tool.url} className={toolsItemLabel}>
                        <span>{label}</span>
                    </label>
                ))}
        </footer>
    </article>
);

export default ToolItem;
