import React, { useEffect, useState } from 'react';
import SingleInventory from '../SingleInventory/SingleInventory';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://warehouse-management-server-side.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1 className='fs-1 text-center my-5 text-red-800 font-bold'>Inventory</h1>
                {

                    products.map(product =><SingleInventory
                        key={product._id}
                        product={product}
                    ></SingleInventory>
                    )
                }
                 
            </div>
        </div>
    );
};

export default Inventory;