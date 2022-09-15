import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [update, setUpdate] = useState(false);
    
    console.log(product);
    useEffect(() => {
        const url = `https://warehouse-management-server-side.vercel.app/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, update]);

    const ProductDeliver =() =>{
        const addedQuantity = parseInt(product.quantity) - 1;
        // handleQuantity(id, addedQuantity);
        console.log(addedQuantity)
        const path = `https://warehouse-management-server-side.vercel.app/updatequantity/${id}`
        fetch(path, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ addedQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setUpdate(!update);
                }
                // console.log(data);
            })
    }

    const handleAddQuantities = e => {
        e.preventDefault();
         const addedQuantity = parseInt(product.quantity) + parseInt(e.target.quantity.value);
        // handleQuantity(id, addedQuantity);
        console.log(parseInt(e.target.quantity.value));
        if(addedQuantity){
            const path = `https://warehouse-management-server-side.vercel.app/updatequantity/${id}`
            fetch(path, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ addedQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setUpdate(!update);                    
                    }
                    console.log(data);
                }) 
        }else{
            alert('please input a value');
        }
       
        e.target.reset()
    }
    //console.log(id, product);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-4 col-md-4 offset-sm-4 offset-md-4 border border-success p-3">
                    <img className='w-50' src={product.image} alt={product.name} />
                    <h1 className='fs-3 mb-2'>{product.name}</h1>
                    <h5><b>Price: </b> ${product.price}</h5>
                    <p><b>Quantity:</b> {product.quantity}</p>
                    <p><b>Supplier:</b> {product.supplier}</p>
                    <p><b>Phone:</b> {product.phone}</p>
                    <p><b>Email:</b> {product.email}</p>
                    <p className='mt-1'><b>Description: </b>{product.description}</p>
                    <button className='btn btn-primary mx-5 my-3' onClick={ProductDeliver}>Deliver</button>
                    <button className='btn btn-success ml-5'>Manage Item</button>

                    <form onSubmit={handleAddQuantities}>
                        <div class="input-group my-3">
                            <input type="text" name='quantity' class="form-control" placeholder="Quantity"/>
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Re Stock</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;