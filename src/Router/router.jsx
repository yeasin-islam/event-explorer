import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import BookedEvents from "../pages/BookedEvents";
import EventDetails from "../pages/EventDetails";
import LoadingFallback from "../components/shared/LoadingFallback";
import ResetPassword from "../pages/ResetPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('../events.json'),
        hydrateFallbackElement: <LoadingFallback />,
      },
      {
        path: '/event-details/:id',
        element: <PrivateRoute> <EventDetails /> </PrivateRoute>,
        loader: () => fetch('../events.json'),
        hydrateFallbackElement: <LoadingFallback />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>,
      },
      {
        path: '/about',
        element: <PrivateRoute><About /></PrivateRoute>,
      },
      {
        path: '/booked-events',
        element: <PrivateRoute> <BookedEvents /> </PrivateRoute>,
      },
      {
        path: '/reset-password',
        element: <ResetPassword/>,
      },

    ]
  },
]);

export default router