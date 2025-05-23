
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "./AuthContext";
const SignIn = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { session, signInUser} = UserAuth()

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

        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300 px-4">
                <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Sign In</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
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
                            SignIn
                        </button>
                    </form>

                    
                </motion.div>
            </div>

        </div>
    )
}



export default SignIn