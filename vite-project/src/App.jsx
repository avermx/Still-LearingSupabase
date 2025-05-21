import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import { supabase } from "./Supabase-client";
import Wrapper from "./Wrapper";


function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Session fetch error:", error);
    }
    setSession(data.session); // ✅ get actual session
    setLoading(false); // ✅ mark loading complete
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: 
        <Wrapper session={session}>
          <Dashboard  />
        </Wrapper>
      
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
