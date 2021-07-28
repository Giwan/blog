import labels from "../../data/labels";
import { button } from "./FilterTools.module.css";

const FilterTools = function ({ setFilter, filters }) {
    const handleClick = function (e) {
        setFilter([e.currentTarget.value]);
    };

    return Object.keys(labels).map((label) => (
        <button
            onClick={handleClick}
            key={label}
            value={label}
            className={button}
            data-active={filters.includes(label)}
        >
            {label}
        </button>
    ));
};

export default FilterTools;
