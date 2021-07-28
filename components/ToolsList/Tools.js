import { useState } from "react";
import ToolsList from "./ToolsList";
import FilterTools from "./FilterTools";

const Tools = () => {
    const [filterList, setFilterList] = useState([]);

    return (
        <>
            <FilterTools
                setFilter={setFilterList}
                filters={filterList}
            />
            <ToolsList filters={filterList} />
        </>
    );
};

export default Tools;
