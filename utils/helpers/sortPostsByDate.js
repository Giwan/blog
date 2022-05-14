import { getDateNumber } from "../helpers";

/**
 * Sort posts by published date
 * @param {*} p1
 * @param {*} p2
 * @returns
 */
export const sortPostsByDate = (dateName) => (p1, p2) => {
    if (!(typeof dateName === "string" && dateName.length > 0)) {
        throw new Error("A valid dateName value is required");
    }

    const [date1, date2] = [p1, p2].map((date) => {
        const meta = date?.module?.meta;

        const dateString = meta[dateName];
        if (typeof dateString !== "string") {
            throw new Error(
                `Invalid ${dateName} date. Value of type string expected. Received: ${dateString}`
            );
        }
        return getDateNumber(dateString);
    });

    return date2 - date1;
};
