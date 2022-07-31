import React from 'react';
import team1 from '../../../Assets/Images/Team/team-1.jpg'
import team2 from '../../../Assets/Images/Team/team-2.jpg'
import team3 from '../../../Assets/Images/Team/team-3.jpg'
import team4 from '../../../Assets/Images/Team/team-4.jpg'
import team5 from '../../../Assets/Images/Team/team-5.jpg'
import team6 from '../../../Assets/Images/Team/team-6.jpg'
import team7 from '../../../Assets/Images/Team/team-7.jpg'
import team8 from '../../../Assets/Images/Team/team-8.jpg'

const Team = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className='text-center my-5'>Our Dedicated Team</h2>

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team1} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Shakib Al Hasan</h5>                           
                                <h4 className='text-primary'>Cheif Accountant</h4>
                                <h6>Mail: shakib@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team2} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Shisir Al Hasan</h5>                           
                                <h4 className='text-primary'>Cheif Makeup Man</h4>
                                <h6>Mail: shisir@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team3} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Tamim Iqbal</h5>                           
                                <h4 className='text-primary'>CEO</h4>
                                <h6>Mail: tamim@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team4} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Ahesha Iqbal</h5>                           
                                <h4 className='text-primary'>CFO</h4>
                                <h6>Mail: ayesha@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team5} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Musfiqur Rahim</h5>                           
                                <h4 className='text-primary'>Cheif Mirror Man</h4>
                                <h6>Mail: mitu@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team6} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Romana Rahim</h5>                           
                                <h4 className='text-primary'>Mirror Specialist</h4>
                                <h6>Mail: romana@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team7} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Nusrat Faria</h5>                           
                                <h4 className='text-primary'>Cheif Indian Specialist</h4>
                                <h6>Mail: nusrat@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}

                    <div className="col-sm-3 col-xs-12 col-md-3 my-3">
                        <div className="card singleImage">
                            <img className='img-fluid' src={team8} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Mahmud Ullah</h5>                           
                                <h4 className='text-primary'>Pain Killer</h4>
                                <h6>Mail: mahmud@mychoiceltd.com</h6>
                                <p>Phone: +8801719420140</p>
                            </div>
                        </div>
                    </div>{/* End Single Team */}




                   

                </div>
            </div>
        </div>
    );
};

export default Team;