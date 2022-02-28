import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import FacebookIcon from "../../Icons/facebook.png";
import GoogleIcon from "../../Icons/google.png"


const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState({
    regPassword: "",
    regConfirmPassword: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSignUp, setOpenSignUp] = useState(false);
  const [validate, setValidate] = useState(null);
  

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInWithGoogle= async()=>{
    try{
     const userCredential= await signInWithPopup(auth, provider);
     console.log(userCredential)
    }
    catch(error){
      console.log(error.message)
    }
  }

  const handleSignUp = async () => {
    handleValidate();
    if(validate){
      try {
        const registerUser = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword.regPassword
        );
        console.log(registerUser, "yuyuuyuyu");
      } catch (error) {
        console.log(error.message);
      }
    };
    }
   
  const handleValidate = () => {
    if (registerPassword.regPassword === registerPassword.regConfirmPassword) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  const handleReset=()=>{
    setRegisterEmail("")
    setValidate(null)
    setRegisterPassword({
      regPassword: "",
      regConfirmPassword: ""
    })
  }

  const handleResetField=()=>{
    setOpenSignUp(true)
    document.getElementById("email-address").value = "";
    document.getElementById("password").value = "";
  }


  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            {openSignUp ? (
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign Up your account
              </h2>
            ) : (
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            )}
          </div>
          <input type="hidden" name="remember" defaultValue="true" />
          {openSignUp ? (
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="register-email"
                  type="register-email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setRegisterPassword({
                      ...registerPassword,
                      regPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setRegisterPassword({
                      ...registerPassword,
                      regConfirmPassword: e.target.value,
                    })
                  }
                />
              </div>
             { validate ==false &&
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">
                  Password does not matched!
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={handleReset}
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>}
            </div>
          ) : (
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          {openSignUp ? (
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
              </div>
              <div className="flex justify-center cursor-pointer">
                <span
                  className="text-decoration-line: underline"
                  onClick={handleResetField}
                >
                  Sign Up
                </span>
              </div>
              <div className="flex justify-center">
            <img src={FacebookIcon} width="40px" height="40px" className="cursor-pointer"/>
            <div className="ml-2">
            <img src={GoogleIcon} width="40px" height="40px" className="cursor-pointer" onClick={signInWithGoogle}/>
            </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
