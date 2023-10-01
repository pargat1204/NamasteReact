import { useState } from 'react';
import "../css/Filter.css";

const Search = () => {

    const { search, setSearch } = useState('');

    const handleSearch = (query) => {
        console.log(`Searching for: ${query}`);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;