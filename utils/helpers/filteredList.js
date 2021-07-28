/**
 * Filters a list of items based on the array of filter items
 * Each tool has a list of labels. 
 * The filter list is a list of labels that should match.
 * @param {Array} tools 
 * @param {Array} filters 
 * @returns 
 */
 export const filteredList = (tools, filters) => {
    if (!filters?.length) {
        return tools;
    }

    return tools.filter((t) => filters.find((f) => t.labels?.includes(f)));
};

export default filteredList;
