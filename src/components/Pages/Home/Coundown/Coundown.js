import React from 'react';
import CountUp from 'react-countup';

const Coundown = () => {
    return (
        <div className='bg-secondary py-5'>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12 col-md-4">
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
                        Total Product
                        </h1>
                    </div>
                    <div className="col-sm-4 col-xs-12 col-md-4">
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
                        Total Customer
                       </h1>
                    </div>
                    <div className="col-sm-4 col-xs-12 col-md-4">
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
                        Total Outlet

                       </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coundown;