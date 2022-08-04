import google from '../../Assets/Images/Login/google.png'
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        //setEmail(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...setErrors, email: "" })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (e) => {
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const passwordRegex = /.{6,}/;
        // minimum 6 character 
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: 'Invalid Password' });
            setUserInfo({ ...userInfo, password: "" })
        }

        // console.log(validPassword);
    }

    const handleLogin = (e) => {
        //console.log(userInfo);
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password)

        //console.log(email,password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            //toast(hookError.message);
            switch (error?.code) {
                case "auth/invalid-email":
                    toast('invalid email provided, Please provide a valid email');
                    break;
                case "auth/email-already-exists":
                    toast('Your email and password already exits');
                    break;
                case "auth/invalid-password":
                    toast('Your password has been wrong');
                    break;

                default:
                    toast('Something went wrong');
            }
        }

    }, [hookError, googleError])
    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleLogin}>
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input type="text" onChange={handleEmailChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                    {errors?.email && <p className='error-message'>{errors.email}</p>}
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input type="password" onChange={handlePasswordChange} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password" />
                                    {errors?.password && <p className='error-message'>{errors.password}</p>}
                                </div>


                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Login
                                </button>
                                <ToastContainer />
                                <div class="mb-3 ">
                                    New Here? Please <Link to='/registration'><span className='text-red-600 font-bold hover:text-orange-600 '>Register </span>  </Link> Here.
                                </div>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>

                                <button className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center" style={{ backgroundColor: "rgb(36 27 27)" }}href="#!"
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                onClick={()=>signInWithGoogle()} >                                    
                                    <img className='w-6 pr-2' src={google} alt=""/> Continue with Google</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;