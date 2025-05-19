import { useState } from "react"
import { supabase } from "./Supabase-client"
import { Link, useNavigate } from "react-router-dom"

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isloggedin , setisLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data) {
     navigate('/dashboard')
     return null;
    }

    if (error) {
      setisLoggedIn(true)
      setMessage(error.message)
      console.error("sign in error", error.message)
      return;
    }
    console.log(data)
  }

  return (
    <>
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
        <div className="bg-[#161B22] p-8 rounded-lg shadow-lg w-full max-w-md text-white">
          <h2 className="text-2xl font-bold text-center mb-1">Sign in to Task Master</h2>

          {isloggedin ? <p className="text-center text-red-500 text-sm mb-1 ">{message}</p> : <p className="text-center text-gray-400 text-sm mb-6">
            Enter your email and password to access your tasks
          </p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                className="w-full px-3 py-2 rounded-md bg-[#0D1117] border border-gray-700 text-sm"
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm">Password</label>
                <a href="#" className="text-blue-400 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <input onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md bg-[#0D1117] border border-gray-700 text-sm"
              />
            </div>


            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <Link to={'/'}>
              <span className="text-blue-400 hover:underline">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignIn