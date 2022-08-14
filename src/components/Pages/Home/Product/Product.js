import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, supplier, phone, email } = product;
    console.log(product);
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <>
            <div className='col-sm-4 col-md-4 col-xs-12'>
                <div className="productContainer">
                    <img className='w-100' src={image} alt={name} />
                    <h3>{name}</h3>
                    <h5>Price: ${price}</h5>
                    <p>Quantity: {quantity}</p>
                    <p>supplier: {supplier}</p>
                    <p>phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>{description}</p>
                    <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>

                </div>
            </div>
        </>


    );
};

export default Product;