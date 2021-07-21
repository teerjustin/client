import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {navigate} from "@reach/router";

const Update = ({id}) => {

    const [productToUpdate, setProductToUpdate] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                // setProductToUpdate(res.data);
                //or
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const formUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            name,
            price,
            description
        })
            .then( updatedProduct => {
                console.log("SUCCESSFUL UPDATE!!!!! :", updatedProduct);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={formUpdate}>
                <div>
                    Product Name:<input type="text" value={name} onChange={ e=> setName(e.target.value)}/>
                </div>
                <div>
                    Price: $<input type="text" value={price} onChange={ e=> setPrice(e.target.value)}/>
                </div>
                <div>
                    Description:<input type="text" value={description} onChange={ e=> setDescription(e.target.value)}/>
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Update