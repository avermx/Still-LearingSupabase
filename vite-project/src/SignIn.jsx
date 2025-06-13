import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserAuth } from "./AuthContext";
const SignIn = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { session, signInUser, Error } = UserAuth()

    console.log(session)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await signInUser(email, password);
            if (result.success) {
                navigate('/dashboard');
            }
        } catch (err) {
            console.log('error ', err)

        }

    }

    return (
        <div className="bg-black text-white font-mono flex flex-col items-center p-10 min-h-screen">

  <h1 className="text-4xl font-bold border-b-4 border-white pb-2 mb-8 uppercase">Sign In</h1>

  <form className="border-4 border-white p-8 w-full max-w-md flex flex-col gap-6">
    
    <div>
      <label for="email" className="block text-sm font-bold uppercase mb-1">Email</label>
      <input type="email" id="email" name="email" required
        className="w-full p-3 border-2 border-white bg-black text-white focus:outline-none" />
    </div>

    <div>
      <label for="password" className="block text-sm font-bold uppercase mb-1">Password</label>
      <input type="password" id="password" name="password" required
        className="w-full p-3 border-2 border-white bg-black text-white focus:outline-none" />
      
      
      <div className="mt-2 text-right">
        <a href="/forgot-password.html" className="text-xs text-white underline hover:text-gray-300">
          Forgot Password?
        </a>
      </div>
    </div>

    <button type="submit"
      className="bg-white text-black p-3 font-bold uppercase hover:bg-black hover:text-white hover:border-2 hover:border-white transition-all duration-150">
      Sign In
    </button>

    <p className="text-xs text-center mt-2 text-white">Welcome back, creative human.</p>
  </form>


  <a href="/"
    className="mt-6 bg-black border-2 border-white text-white p-3 font-bold uppercase hover:bg-white hover:text-black transition-all duration-150">
    Create New Account
  </a>


</div>
    )
}



export default SignIn