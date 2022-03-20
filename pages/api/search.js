import { posts } from "../../cache/searchData";

const Search = function(request, response) {
    const results = request.query.q 
    ? posts.filter(post => post.title.toLowerCase().includes(request.query.q)) 
    : []; 

    response.statusCode = 200;
    response.setHeader("Content-Type", "Application/json");

    response.end(JSON.stringify({ results }));
}

export default Search;