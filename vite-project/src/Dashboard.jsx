import { useNavigate } from "react-router-dom";
import { supabase } from "./Supabase-client"

const Dashboard = () => {
  const navigate = useNavigate()
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error;
    navigate('/signin')
  }
  return (
    <div className="bg-black text-white h-screen w-full flex flex-col gap-2">
      <h1>Hello, You Are Logged In</h1>
      <button onClick={signOut} className="bg-white text-black p-1 w-[10%]">SignOut</button>
    </div>
  )
}

export default Dashboard