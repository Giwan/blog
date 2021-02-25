/**
 * For each file in the directory, get the filename
 * and remove the string "index.mdx"
 * @param {*} r
 */
function importAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName),
    }));
}

export const posts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
);
