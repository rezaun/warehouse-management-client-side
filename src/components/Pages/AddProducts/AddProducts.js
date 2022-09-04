import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container'>
            <div className="row">
                <div className='w-50 mx-auto'>
                    <h2>Please Add Product</h2>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className='p-1 border border-dark mb-3 rounded' defaultValue="name" {...register("example")} />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input className='p-1 mb-3 border border-dark rounded' {...register("price", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' {...register("quantity", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' {...register("supplier", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' {...register("phone", { required: true })} />
                        <input className='p-1 mb-3 border border-dark rounded' {...register("Email", { required: true })} />
                        <textarea className='p-1 mb-3 border border-dark rounded' {...register("Description", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;