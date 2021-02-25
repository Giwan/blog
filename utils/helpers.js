export const reverseDate = (date = "") =>
    parseInt(date.split("-").reverse().join(""));

export const getDateNumber = (date) => date.replace(/-/g, "");
