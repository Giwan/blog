import React from "react";
import {
    button,
    pageButtonContainer,
    pageNumberStyle,
} from "./Pagination.module.css";

const Pagination = function ({
    pageNumber,
    prevButtons,
    nextButtons,
    setPage,
    totalPages,
}) {
    return (
        <div className={pageButtonContainer}>
            <PageButtons {...{ buttons: prevButtons }} />
            <PageButtons
                buttons={createButtons(
                    [-4, -3, -2, -1],
                    setPage,
                    pageNumber,
                    totalPages
                )}
            />
            <span className={pageNumberStyle}>{pageNumber}</span>
            <PageButtons
                buttons={createButtons(
                    [1, 2, 3, 4],
                    setPage,
                    pageNumber,
                    totalPages
                )}
            />
            <PageButtons {...{ buttons: nextButtons }} />
        </div>
    );
};

export default Pagination;

/**
 * Creates the buttons based on the current page.
 * If the currentPage is on the first page then
 * no buttons are created before it.
 *
 * The other way around if the current page is at the last page,
 * no buttons are created after it.
 *
 * It also checks whether 2 or 4 buttons should be created before
 * or after the current page button.
 *
 * if the conditions are passed then an object is returned.
 * The action property is a function which will set the new (valid) page number
 *
 * @param {Array} values
 * @param {Function} setPage
 * @param {Number} pageNumber
 * @param {Number} totalPages
 * @returns Object
 */
const createButtons = function (values = [], setPage, pageNumber, totalPages) {
    /**
     * Check if `val` is a valid value. 
     * If it violates any of the rules then `undefined` is returned.
     * That signals that `val` is not a valid number
     * @param {Number} val 
     * @returns Boolean
     */
    function isValid(val) {
        const nextPage = pageNumber + val;

        if (nextPage < 1 || nextPage >= totalPages + 1) return;

        if (nextPage < pageNumber - 2 && totalPages - pageNumber >= 2) return;

        if (nextPage > pageNumber + 2 && pageNumber > 2) return;

        return true;
    }

    // if the `val` is a valid value then return the 
    // object with it's label and action (to go to that page)
    return values.map(
        (val) =>
            isValid(val) && {
                label: pageNumber + val,
                action: () => setPage(pageNumber + val),
            }
    );
};

/**
 * Create a button element based on the provided array of buttons.
 */
const PageButtons = ({ buttons }) =>
    buttons.map((b) => {
        if (!b) return null;
        const { label, action } = b;

        return (
            <button key={label} onClick={action} className={button}>
                {convertLabel(label)}
            </button>
        );
    });

/**
 * Helper function to use the HTML icons
 * Used for the previous and next buttons.
 */
const convertLabel = (label) =>
    typeof label === "number" ? (
        label
    ) : (
        <span dangerouslySetInnerHTML={{ __html: label }} />
    );
