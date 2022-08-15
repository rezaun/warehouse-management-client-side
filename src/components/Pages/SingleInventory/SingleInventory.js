import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleInventory = ({ product }) => {
    const { _id, name, image, description, price, quantity, supplier, phone, email } = product;
    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='singleProduct col-sm-4 col-md-4 col-xs-12 rounded mb-5'>
            <div className="border border-sky-500 p-5">
                <img className='w-100' src={image} alt={name} />
                <h1 className='fs-3 mb-2'>{name}</h1>
                <h5><b>Price: </b> ${price}</h5>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Supplier:</b> {supplier}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
                <p className='mt-1'><b>Description: </b>{description.slice(1, 193)}</p>
                <button onClick={() => navigateToProductDetails(_id)} className='btn btn-primary mr-2'>Stock Update</button>
                <button onClick={() => navigateToProductDetails(_id)} className='btn btn-success'>Manage Stock</button>

            </div>
        </div>
    );
};

export default SingleInventory;