import React from "react";

export default function ProductRow (props) {
    const {products: {name, price, inStock}} = props

    const stock = inStock ? <h3>{name}</h3> : <h3 style={{color : 'red '}}>{name}</h3>

    
    return(
        <div>
            <tr>
            <td>{stock}</td>
            <td>{price}€</td>
            </tr>
      
        </div>
    )
}