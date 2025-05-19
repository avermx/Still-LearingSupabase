import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./SignUp"
import Dashboard from "./Dashboard"
import SignIn from "./SignIn"


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/signin',
      element: <SignIn />
    }


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
