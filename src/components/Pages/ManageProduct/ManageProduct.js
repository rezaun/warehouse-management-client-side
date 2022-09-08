import React from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id =>{
        const proceed = window.confirm('are  you sure?');
        if(proceed){  
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);

            })

        }
    }
    return (
        <div className='container'>
           <div className="row">
           <h2>Manage  Products</h2>
            {
                products.map(product => <div key={product._id}>
                    <h6>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h6>

                </div>)
            }
           </div>
        </div>
    );
};

export default ManageProduct;