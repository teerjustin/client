import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"

const ViewOne = (props) => {
    console.log(props);

    const [thisProduct, setThisProduct] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then( res => {
                console.log(res.data);
                setThisProduct(res.data);
            })
            .catch()
    }, [props.id])


    return (
        <div>
            <div>
                {thisProduct.name}
            </div>
            <div>
                ${thisProduct.price}
            </div>
            <div>
                Description: {thisProduct.description}
            </div>
        </div>
    )
}

export default ViewOne