import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    
    return (
        <>
        <div className="container">
            <div className="row">
                <h1 className='fs-1 text-center my-5 text-red-800 font-bold'>Our Products</h1>                             
                    {
                        
                        products.slice(1,7).map(product => <Product
                            key={product._id}                             
                            product={product}
                        ></Product>)
                    }                
            </div>    
        </div>  
        </>
    );
};

export default Products;