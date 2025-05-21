import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import { supabase } from "./Supabase-client";
import Wrapper from "./Wrapper";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch initial session
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Session fetch error:", error);
      }
      setSession(data.session);
    };

    fetchSession();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: (
        <Wrapper session={session}>
          <Dashboard />
        </Wrapper>
      ),
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
