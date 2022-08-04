import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword:"",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [ createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification : true });


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
    const handleConfirmPasswordChange = (e) => {

        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Password Don't Match" });
            setUserInfo({ ...userInfo, confirmPass: "" })
        }

        // console.log(validPassword);
    }

    const handleLogin = (e) => {
        //console.log(userInfo);
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

        //console.log(email,password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    useEffect(()=>{
        if(user){
            navigate(from)
        }
    },[user])

    useEffect(() => {
        const error = hookError ;
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

    }, [hookError])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 offset-md-4 col-md-4 my-5">
                        <h2>Registration Here</h2>
                    <form onSubmit={handleLogin}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' onChange={handleEmailChange} />
                            {errors?.email && <p className='error-message'>{errors.email}</p>}
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'  onChange={handlePasswordChange} />
                            {errors?.password && <p className='error-message'>{errors.password}</p>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Password'  onChange={handleConfirmPasswordChange} />
                            {errors?.password && <p className='error-message'>{errors.password}</p>}
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Sign up</button>
                        <ToastContainer />
                        <div class="mb-3 ">
                            New Here? Please <Link to='/login'>Login</Link> Here.
                        </div>
                    </form>                    

                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;