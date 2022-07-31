import React from 'react';
import notFound from '../../Assets/Images/404/notFound.jpg'
const NotFound = () => {
    return (
        <div className='notFound'>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;