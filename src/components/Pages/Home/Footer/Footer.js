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
                            <h4>My Account</h4>
                            <ul>
                                <li><Link to="">Sign in</Link></li>
                                <li><Link to="">Create Account</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4>About Us</h4>
                            <ul>
                                <li><Link to="">About Us</Link> </li>
                                <li><Link to="">Contact Us</Link> </li>
                                <li><Link to="">Terms & conditions</Link> </li>
                                <li><Link to="">Privacy policy</Link> </li>
                                <li><Link to="">Cancellation, Return & Refund Policy</Link> </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4>Customer Service</h4>
                            <ul>
                                <li><Link to="">About your order</Link></li>
                                <li><Link to="">Wishlist</Link></li>
                                <li><Link to="">Comparison list</Link></li>
                            </ul>

                        </div>
                        <div className="col-sm-3 col-md-3 col-x-12">
                            <h4>Contact us</h4>
                            <p>Hazi Villa, Ja/89, Middle Badda, Dhaka- 1212.
                                Mon-Sun 9.00 - 18.00
                                info@mychoiceltd.com</p>
                        </div>

                    </div>

                </div>
                <div className="lower-fotoer bg-secondary text-white py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 col-md-6">© 2020 mychoiceltd.com</div>
                            <div className="col-sm-6 col-xs-12 col-md-6 text-right">
                                <span className='px-1 '><Link className=' text-white' to=''><FaFacebookF /></Link></span>
                                <span className='px-1'><Link className='mr-2 text-white' to=''><FaTwitter /></Link></span>
                                <span className='px-1'><Link className='mr-2 text-white' to=''><FaLinkedinIn /></Link></span>
                                <span className='px-1'> <Link className='mr-2 text-white' to=''><FaYoutubeSquare /></Link></span>
                                <span className='px-1'><Link className='mr-2 text-white' to=''><FaPinterestP /></Link></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;