/**
 * Filters a list of items based on the array of filter items
 * Each tool has a list of labels.
 * The filter list is a list of labels that should match.
 * @param {Array} tools
 * @param {Array} filters
 * @returns
 */
export const filteredList = (tools, category) => {

    if(!category) return tools;

    const regCategory = new RegExp(category, "i");
    return tools.filter((t) => regCategory.test(t.category));
};

export default filteredList;
