import { getDateNumber } from "../helpers";

/**
 * Sort posts by published date
 * @param {*} p1
 * @param {*} p2
 * @returns
 */
export const sortPostsByDate = (p1, p2) => {
    const [date1, date2] = [p1, p2].map((date) => {
        const dateString = date?.module?.meta?.published;
        if (typeof dateString !== "string") {
            throw new Error(
                "Invalid published date. Value of type string expected"
            );
        }
        return getDateNumber(dateString);
    });

    return date2 - date1;
};
