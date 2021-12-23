import { useState } from "react";
import { searchAndResultsContainer } from "../../styles/search.module.css";
import SearchQuery from "../../components/Search/SearchQuery";
import SearchResults from "../../components/Search/SearchResults";
import searchService from "../../service/searchService";


const Search = function() {
    const [searchData, setSearchData] = useState({});

    const handleSearch = async function(e) {
        e.preventDefault();
        const keyword = e.currentTarget.q.value;
        const {results} = await searchService.find(keyword);
        setSearchData({keyword, results});
    }

    return (
        <div className={searchAndResultsContainer}>
            <SearchQuery {...{handleSearch}} />
            <SearchResults {...{searchData}} />
        </div>
    )
}

export default Search;