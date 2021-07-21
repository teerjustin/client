import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Create = (props) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const formCreate = (e) => {
        e.preventDefault();
        console.log("Submit!!!!!")

        const newProduct = {
            name: name,
            price: price,
            description: description
        }

        axios.post("http://localhost:8000/api/products", newProduct)
            .then( res => {
                console.log(res);
                setName("");
                setPrice("");
                setDescription("");
                navigate("/");
            })
            .catch( err => console.log(err))

    }
    return (
        <div>
            <form onSubmit={formCreate}>
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

export default Create