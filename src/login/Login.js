import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import drow2 from '../assets/images/draw2.jpg';
import mail from '../assets/images/email.png';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
// import google from '../assets/images/google.png';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

  const { signInUser, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
 

  



  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(res => {
        const user = res.user;
        // console.log(user);
        // navigate('/');
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error));
  }


  if (loading) {
    return <h1 className='text-5xl'>Loading...</h1>
  }


  // const handleGoogleSignin = () => {
  //   googleSignin(googleProvider).then(res => {
  //     const user = res.user;
  //     navigate(from, { replace: true });
  //   })
  //   .catch(err => console.error(err));
  // }

  return (
    <>
      <div className="container ">
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6" >
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" >
                <img src={drow2} alt="" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={handleLogin}>
                  <div className="flex flex-row items-center justify-center lg:justify-start mb-5">
                    <p className="text-3xl font-bold">Login</p>

                  </div>

                  {/* <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                  >
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div> */}


                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                  </div>


                  <div className="mb-6">
                    <input
                      type="password"
                      name="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput3"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    {/* <div className="form-group form-check">
                      <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"/>
                      <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                    </div> */}
                    <Link to="#!" className="text-gray-800">Forgot password?</Link>
                  </div>

                  <div className="text-center lg:text-left">
                    <input type='submit' value='Login' className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" />
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <Link to="/register" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</Link>
                    </p>


                    <div
                      className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                      <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    {/* <div className="flex flex-row items-center justify-center lg:justify-start mt-5">
                      <p className="text-lg mb-0 mr-4">Sign in with</p>
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
                    </div> */}
                    <SocialLogin></SocialLogin>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;