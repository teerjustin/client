import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "@reach/router"

const Main = (props) => {

    const [products, setProducts] = useState([])

    useEffect( ()=> {
        getProductsFromDB()
    }, [])

    const getProductsFromDB = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch( err => console.log(err))
    }

    const deleteProduct = (productID) => {
        console.log(productID);

        axios.delete("http://localhost:8000/api/products/" + productID)
            .then( res => {
                console.log(res.data);
                setProducts(products.filter(product => product._id !== productID))
            })
            .catch (err => console.log(err))
    }

    return (
        <div>
            {/* {JSON.stringify(products)} */}
            <h4>All products</h4>
            {
                products.map((product, i)=> {
                    return (
                        <div key ={product._id}> 
                            <Link to={"/products/" + product._id}>
                                <p> {product.name} </p>
                            </Link>

                            <Link to={"/products/update/"+product._id}>
                                Update Product
                            </Link>
                            <button onClick={ () => deleteProduct(product._id)}> Delete Product</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main