import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';


    const { googleSignin } = useContext(AuthContext);


    const handleGoogleSignin = () => {
        googleSignin(googleProvider).then(res => {
          const user = res.user;
          navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
      }
    return (
        <div className="flex flex-row items-center justify-center lg:justify-start mt-5">
            <p className="text-lg mb-0 mr-2 text-black-600">Sign in with</p>
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1" >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">

                    <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                </svg>
            </button>

            <button
                onClick={handleGoogleSignin}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1" >
                <img src={google} alt="" />

            </button>
        </div>
    );
};

export default SocialLogin;