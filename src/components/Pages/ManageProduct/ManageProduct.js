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
            {
                products.map(product => <div className="col-sm-4 " key={product._id}>
                    
                    <div className='m-2 border border-success p-3 rounded '>
                    <img className='w-50' src={product.image} alt={product.name} />
                    <h1 className='fs-3 mb-2'>{product.name}</h1>
                    <h5><b>Price: </b> ${product.price}</h5>
                    <p><b>Quantity:</b> {product.quantity}</p>
                    <p><b>Supplier:</b> {product.supplier}</p>
                    <p><b>Phone:</b> {product.phone}</p>
                    <p><b>Email:</b> {product.email}</p>
                    <p className='mt-1'><b>Description: </b>{product.description.slice(0,20)}</p>
                    <button className="btn btn-primary mr-2">Save Changes</button>
                    <button className='btn btn-info' onClick={() => handleDelete(product._id)}>Delete</button>  
                    </div>
                    
                </div>)
            }          
        </div>
        </div>
    );
};

export default ManageProduct;