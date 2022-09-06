import React from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageProduct = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>Manage Your Product</h2>
        </div>
    );
};

export default ManageProduct;