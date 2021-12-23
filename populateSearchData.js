const path = require("path"); // os path
const fs = require("fs"); // file system


function getPosts () {
    const postsDirectory = path.join(process.cwd(), 'pages/blog');
    const fileNames = fs.readdirSync(postsDirectory).filter(item => item !== ".DS_Store");
    const posts = fileNames.map(fileName => ({
        id: fileName, 
        title: fileName
    }))
    return JSON.stringify(posts); 
}

const fileContents = `export const posts = ${getPosts()};`; 

try {
    fs.readdirSync("cache"); 
} catch({}) {
    fs.mkdirSync("cache");
}

fs.writeFile("cache/searchData.js", fileContents, function(err){
    if (err) return console.error(err);
    console.log("Posts cached");
}); 