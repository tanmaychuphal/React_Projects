import { useState } from "react"
import Header from "./Header"

const Login=()=>{
    
    const [isSignInForm,setIsSignInForm]=useState(true);
    
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
                />

            </div>
            <form className="w-2/7 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80">
                <h2 className="font-bold text-3xl py-2 m-2">
                    {isSignInForm ? "Sign In":"Sign Up"}
                </h2>
                {!isSignInForm && <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />}
                <input 
                    type="text" 
                    placeholder="Email or phone number" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />
                <button className="bg-red-500 p-2 my-2 w-full rounded">
                    {isSignInForm ? "Sign In":"Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered! Sign In Now."}
                </p>
            </form>
        </div>
    )
}

export default Login