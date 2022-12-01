import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import mail from '../assets/images/email.png';
import google from '../assets/images/google.png';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../login/SocialLogin/SocialLogin';

const Register = () => {

  const { createUser } = useContext(AuthContext);


  const handleSignup = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        form.reset();
      })
      .catch(err => console.error(err));
  }
  return (
    <>
      <section className="h-screen flex justify-center align-middle">
        <div className="container px-6 py-12 h-full">

          <div className="lg:w-6/12 md:w-full sm-w-full" style={{ margin: "auto" }}>
            <form onSubmit={handleSignup}>


              <div className="mb-6">
                <input type="text" name="name" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Full Name" />
              </div>

              <div className="mb-6">
                <input type="number" name="phone" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Number" />
              </div>

              <div className="mb-6">
                <input type="text" name="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
              </div>

              <div className="mb-6">
                <input type="password" name="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
              </div>

              {/* <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light"> Register </button> */}
              <input type='submit' value='Sign up' className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" />
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">


                <p className="text-center font-semibold mx-4 mb-0">OR</p>



              </div>
              <div className='my-9 text-center'>
                <p className="text-sm font-semibold ">
                  Do you have an account?
                  <Link
                    to="/login"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Login</Link
                  >
                </p>
              </div>
              <div className='flex justify-center'>
                <SocialLogin></SocialLogin>
              </div>
              {/* <Link className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-4" style={{ backgroundColor: "#55acee" }} to="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={google} alt="" className='mr-3' />Continue with Google </Link>
              <Link className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3" style={{ backgroundColor: "#3b5998" }} to="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2">

                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>Continue with Facebook
              </Link> */}
            </form>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Register;