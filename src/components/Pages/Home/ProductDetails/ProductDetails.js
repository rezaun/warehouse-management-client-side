import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const {product, setProduct} = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
        .then(res =>res.json())
        .then(data =>console.log(data))
    }, [])

    return (
        <div>
            <h2>You are about to details about product {product.name}</h2>
        </div>
    );
};

export default ProductDetails;