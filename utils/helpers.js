import filteredList from "./helpers/filteredList";

export { filteredList };


export const reverseDate = (date = "") =>
    parseInt(date.split("-").reverse().join(""));

/**
 * Format the string date to a number
 * Typically used for sorting by date
 * @param {String} date A date string that formatted as 10-10-1980
 * @returns Number
 */
export const getDateNumber = (dateString) => {
    if (typeof dateString !== "string") {
        throw new Error("Provided date argument is not of type string");
    }
    return Number(dateString?.replace(/-/g, "")) || 0;
}

/**
 * Check to see what style should be applied.
 * This is used by the navigation route.
 * It is in this file mostly because of testing.
 * @param {Object} router The router parameters object
 * @param {Object} styles The imported styles object
 * @param {Object | String} target The target path
 */
export const getStyle = (router, styles, target) => {
    const [_target, _routes] = getStyleValidation(router, target);

    // early check for exact match
    if (router.pathname === _target) {
        return styles.activeLink;
    }

    if (Array.isArray(_routes) && _routes.length) {
        return _routes.find((route) => router.pathname.indexOf(route) > -1)
            ? styles.activeLink
            : undefined;
    }
};

/**
 * Throws an error if any important information is missing
 * when determining the routes.
 * @param {Object} router
 * @param {String | Object} target
 */
export const getStyleValidation = (router, target) => {
    if (!(router && router.pathname)) {
        throw new Error("Please provide a valid router object with pathname");
    }

    let _target = target,
        _routes = [];
    if (typeof target === "object") {
        if (!target.path) {
            throw new Error(
                "The path value is required when the target is an object. target: " +
                    JSON.stringify(target)
            );
        }
        _target = target.path;
        _routes = target.routes;
    }

    return [_target, _routes];
};
