import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutubeSquare, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div id="footer" className='bg-light pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4 className='fs-2 mb-3 text-rose-700'>My Account</h4>
                            <ul>
                                <li><Link to="">Sign in</Link></li>
                                <li><Link to="">Create Account</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4 className='fs-2 mb-3 text-rose-700'>About Us</h4>
                            <ul>
                                <li><Link to="">About Us</Link> </li>
                                <li><Link to="">Contact Us</Link> </li>
                                <li><Link to="">Terms & conditions</Link> </li>
                                <li><Link to="">Privacy policy</Link> </li>
                                <li><Link to="">Cancellation, Return & Refund Policy</Link> </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4 className='fs-2 mb-3 text-rose-700'>Customer Service</h4>
                            <ul>
                                <li><Link to="">About your order</Link></li>
                                <li><Link to="">Wishlist</Link></li>
                                <li><Link to="">Comparison list</Link></li>
                            </ul>

                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4 className='fs-2 mb-3 text-rose-700'>Contact Us</h4>
                            <p>330, Tangail House, Dhaka- 1207.
                                Mon-Sun 9.00 - 18.00
                                info@mychoiceltd.com</p>
                        </div>

                    </div>

                </div>
                <div className="lower-footer bg-secondary text-white mt-5 pt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 col-md-6 text-pink-50">© 2020 mychoiceltd.com</div>
                            <div className="col-sm-6 col-xs-12 col-md-6 text-end social-wrapper">
                                <span className='px-1 '><a className=' text-white' href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a></span>
                                <span className='px-1'><a className='mr-2 text-white' href="https://www.facebook.com/" target='_blank'><FaTwitter /></a></span>
                                <span className='px-1'><a className='mr-2 text-white' href="https://www.facebook.com/" target='_blank'><FaLinkedinIn /></a></span>
                                <span className='px-1'> <a className='mr-2 text-white' href="https://www.facebook.com/" target='_blank'><FaYoutubeSquare /></a></span>
                                <span className='px-1'><a className='mr-2 text-white' href="https://www.facebook.com/" target='_blank'><FaPinterestP /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;