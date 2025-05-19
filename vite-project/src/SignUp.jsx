import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from './Supabase-client'
import { Link, useNavigate } from "react-router-dom"


const SignUp = () => {
    const [isSignedUp, setisSignedUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: 'http://localhost:5173/signin'
            }
        });
        if (data) {
            setTimeout(() => {
                setisSignedUp(true)
            }, 500)
        }
        if (error) {
            console.log("ye hai error", error)

        }
            console.log(data)
            
    }

    const handleSignIn = () => {
        navigate('/signin')
    }


    return (

        <div>
            {isSignedUp ? <div className="flex items-center justify-center min-h-screen bg-[#0D1117]">
                <div className="bg-[#161B22] rounded-lg p-8 shadow-lg text-center w-full max-w-md">
                    <div className="flex justify-center mb-4">
                        <svg
                            className="w-12 h-12 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-white text-2xl font-semibold">Account Created</h2>
                    <p className="text-gray-400 mt-2">{`Your account has been created successfully, ${name}`}

                    </p>
                    <button onClick={handleSignIn} className="mt-6 bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition">
                        Go to Sign In
                    </button>
                </div>
            </div> : <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300 px-4">
                <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Sign Up</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your name"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                                    placeholder="••••••••"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-all"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account? <Link to={'/signin'}><span  className="text-indigo-600 hover:underline">Log in</span></Link>
                    </p>
                </motion.div>
            </div>}

        </div>
    )
}

export default SignUp