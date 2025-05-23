import { useNavigate } from "react-router-dom"
import { UserAuth } from "./AuthContext"


const Dashboard = () => {
    const { session, signOut } = UserAuth()
    const navigate = useNavigate()
    const handleSignOut = async (e) => {
        console.log(session);
        
        e.preventDefault()
        try {
            await signOut()
            navigate('/')
        } catch (err) {
            console.error(err);

        }

    }
    return (
        <>
            <div>Dashboard</div>

            <button onClick={handleSignOut}>
                signOut
            </button>
        </>
    )
}

export default Dashboard