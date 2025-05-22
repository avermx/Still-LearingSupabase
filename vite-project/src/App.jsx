import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
