import React from "react";
import tools from "../../data/tools";
import styles from "../../styles/tools.module.css";
// Behance.net, Dribble.com

const ToolsList = () => (
    <section className={styles.toolsList}>
        {tools.map((tool) => (
            <ToolItem key={tool.title + tool.description} tool={tool} />
        ))}
    </section>
);

export default ToolsList;

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
            <h2>{tool.title}</h2>

            <p>{tool.description}</p>
        </a>
        <footer>
            {Array.isArray(tool.labels) &&
                tool.labels.map((label) => (
                    <label key={label}>
                        <span>{label}</span>
                    </label>
                ))}
        </footer>
    </article>
);
