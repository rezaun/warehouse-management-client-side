import React from 'react';
import CountUp from 'react-countup';

const Coundown = () => {
    return (
        <div className='bg-secondary py-5'>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12 col-md-4 py-5">
                        <h1 className='text-white text-center'><CountUp
                            start={50}
                            end={2500}
                            duration={2.75}
                            separator=" ">
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <span className='text-warning'>Total Product</span>
                        </h1>
                    </div>
                    <div className="col-sm-4 col-xs-12 col-md-4 py-5">
                       <h1  className='text-white text-center'>
                       <CountUp
                            start={50}
                            end={5050}
                            duration={2.75}
                            separator=" ">
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />

                                </div>
                            )}
                        </CountUp>
                        <span className='text-warning'>Total Customer</span>
                       </h1>
                    </div>
                    <div className="col-sm-4 col-xs-12 col-md-4 py-5">
                    <h1  className='text-white text-center'>
                       <CountUp
                            start={5}
                            end={25}
                            duration={2.75}
                            separator=" ">
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />

                                </div>
                            )}
                        </CountUp>
                        <span className='text-warning'>Total Outlet</span>

                       </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coundown;