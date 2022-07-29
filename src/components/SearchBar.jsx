import React from "react";

export default function SearchBar (props) {
    const { onChange } = props
    return(
        <input type="text" placeholder="Search" onChange={handleSearch} />
    )
}