import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../pages/About";
import CardDetails from "../pages/CardDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/crd-details',
        element: <PrivateRoute><CardDetails /></PrivateRoute>
      },

    ]
  },
]);

export default router