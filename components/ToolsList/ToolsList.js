import React from "react";
import tools from "../../data/tools";
import styles from "../../styles/tools.module.css";
import ToolItem from "./ToolItem";
import { filteredList } from "../../utils/helpers";
// Behance.net, Dribble.com

const ToolsList = ({ filters = [] }) => (
    <section className={styles.toolsList}>
        {filteredList(tools, filters).map((tool) => (
            <ToolItem key={tool.url} tool={tool} />
        ))}
    </section>
);

export default ToolsList;
