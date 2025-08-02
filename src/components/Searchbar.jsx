import React from 'react'

function Searchbar({ onSearch }) {
    return (
        <div className="searchbar-container header">
            <input onChange={(e) => onSearch(e.target.value)} type="txt" placeholder="&#x1F50E;&#xFE0E; Search" />
        </div>
    )
}

export default Searchbar