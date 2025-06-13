import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "./AuthContext";


const SignUp = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { session, signUpNewUser } = UserAuth()

    console.log(session)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await signUpNewUser(email, password);
            if (result.success) {
                navigate('/dashboard');
            }
        } catch (err) {
            console.log('error ', err)

        } 

    }

    const handleSign = () =>{
      navigate('/signin')
    }

    return (
<div class="bg-black text-white font-mono flex flex-col items-center p-10 min-h-screen">

  <h1 class="text-4xl font-bold border-b-4 border-white pb-2 mb-8 uppercase">Sign Up</h1>

  <form class="border-4 border-white p-8 w-full max-w-md flex flex-col gap-6" onSubmit={handleSubmit}>
    
    <div>
      <label for="name" class="block text-sm font-bold uppercase mb-1">Name</label>
      <input type="text" id="name" name="name" required 
        class="w-full p-3 border-2 border-white bg-black text-white focus:outline-none" />
    </div>

    <div>
      <label for="email" class="block text-sm font-bold uppercase mb-1">Email</label>
      <input type="email" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)}
        class="w-full p-3 border-2 border-white bg-black text-white focus:outline-none" />
    </div>

    <div>
      <label for="password" class="block text-sm font-bold uppercase mb-1">Password</label>
      <input type="password" id="password" name="password" required onChange={(e)=>setPassword(e.target.value)}
        class="w-full p-3 border-2 border-white bg-black text-white focus:outline-none" />
    </div>

    <button type="submit"
      class="bg-white text-black p-3 font-bold uppercase hover:bg-black hover:text-white hover:border-2 hover:border-white transition-all duration-150">
      Create Account
    </button>

    <button class="text-xs text-center mt-2 text-white" onClick={handleSign}>Sign In</button>

  </form>

</div>
    )
}

export default SignUp