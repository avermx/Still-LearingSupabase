
import { UserAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

export const Wrapper = ({children}) => {
const {session} = UserAuth();

  return <>{session ? <>{children}</> : <Navigate to ='/signin'/>} </>
  
}
