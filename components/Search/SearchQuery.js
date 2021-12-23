

const SearchQuery = function({handleSearch}) {
    return (
        <form onSubmit={handleSearch}>
            <input type="search" name="q" />
            <button>Search</button>
        </form>
    )
}

export default SearchQuery;