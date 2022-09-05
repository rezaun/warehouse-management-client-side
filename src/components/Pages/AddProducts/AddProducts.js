import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url =`http://localhost:5000/product`;
        fetch(url, {
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result);
        })
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className='w-50 mx-auto'>
                    <h2 className='fs-2 text-center py-3'>Please Add Product</h2>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className='p-1 border border-dark mb-3 rounded' placeholder='Name' {...register("name", { required: true })} />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Price' {...register("price", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Quantity' {...register("quantity", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Supplier' {...register("supplier", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Phone' {...register("phone", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Email' {...register("email", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Image' {...register("image", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' placeholder='Company' {...register("company", { required: true })} />
                        <textarea className='p-1 mb-3 border border-dark rounded' placeholder='Description' {...register("description", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className='btn btn-warning' value="Add Products" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;