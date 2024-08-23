import React from 'react'

const SearchTask = ({search, setSearch}) => {
    return (
        <div className="searchTask">
            <h2>Search</h2>
            <input type="text" placeholder='Enter a task name' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}
 
export default SearchTask