import React from "react";

export default function ProductTable (props) {
    const {products} = props
    return(
        <table>
            <td>Name</td>
            <td>Price</td>
           {products.map(elem => {
                return <ProductRow key={elem._id} info = {elem} />
            })}
        </table>
    )
}