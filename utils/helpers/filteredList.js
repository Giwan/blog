/**
 * Filters a list of items based on the array of filter items
 * Each tool has a list of labels.
 * The filter list is a list of labels that should match.
 * @param {Array} tools
 * @param {Array} filters
 * @returns
 */
export const filteredList = (tools, filters, category) => {
    // if (!filters?.length) {
    //     return tools;
    // }

    if(!category) return tools;

    const regCategory = new RegExp(category, "i");
    return tools.filter((t) => regCategory.test(t.category));
    // return tools.filter((t) => filters.find((f) => t.labels?.includes(f))); // Dont delete this is to filter on multiple labels
};

export default filteredList;
