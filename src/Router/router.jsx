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
import ErrorPage from "../pages/ErrorPage";
import BookedEvents from "../pages/BookedEvents";
import EventDetails from "../pages/EventDetails";
import LoadingFallback from "../components/shared/LoadingFallback";


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
        hydrateFallbackElement: <LoadingFallback/>,
      },
      {
        path: '/event-details/:id',
        Component: EventDetails,
        loader: () => fetch('../events.json'),
        hydrateFallbackElement: <p>Loading, Please Wait....</p>,
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
        path: '/bookedevents',
        Component: BookedEvents,
      },

    ]
  },
]);

export default router