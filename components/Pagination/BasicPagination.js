import React from "react"; 
import { button } from "./Pagination.module.css";

const buttons = ["first", "previous", "1", "2", "3", "4", "5", "next", "last"]

const Pagination = function() {
    return buttons.map(label => <button key={label} className={button}>{label}</button>)
}

export default Pagination;
