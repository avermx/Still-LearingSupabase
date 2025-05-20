import { Navigate } from "react-router-dom";

function Wrapper({ session, children }) {
  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default Wrapper;