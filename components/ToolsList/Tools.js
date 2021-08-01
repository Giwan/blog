import { useState } from "react";
import ToolsList from "./ToolsList";
import FilterTools from "./FilterTools";

const Tools = () => {
    const [filters, setFilter] = useState([]);
    const [category, setCategory] = useState();

    return (
        <>
            <FilterTools {...{ setFilter, filters, setCategory, category }} />
            <ToolsList {...{ filters, category }} />
        </>
    );
};

export default Tools;
