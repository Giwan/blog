/**
 * For each file in the directory, get the filename
 * and remove the string "index.mdx"
 * @param {*} r
 */
function importAll(r) {
    return r.keys().map((fileName) => ({
        link: stripStartingSlash(stripIndexMdx(fileName)),
        module: r(fileName),
    }));
}

const stripIndexMdx = (fileName) => fileName.substr(1).replace(/\/index\.mdx$/, ""); 
const stripStartingSlash = (fileName) => fileName.replace(/^\//, "");

export const posts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
);