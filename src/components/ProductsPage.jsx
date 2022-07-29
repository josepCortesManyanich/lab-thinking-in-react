import React, {useState} from "react";
import jsonData from './../../data.json';
import ProductRow from "./ProductRow";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function ProductsPage () {
    const [products, setProducts] = useState(jsonData);

    const handleSearch = (search) => {
        if (search === ''){
            setProducts(jsdonData)
        } else{
            const searched = products.filter(elem => elem.name.toLowerCase.includes(search.toLowerCase()))
            setProducts(searched)
        }
    }

    


    
    return(
        <div>
          <h1>IronStore</h1>
          <SearchBar />
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <ProductTable/>
          <ProductRow/>
        </div>    
    )
  }
  