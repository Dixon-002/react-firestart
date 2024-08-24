import { lazy } from "react";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Example from "./pages/Example";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";

const NotFound = lazy(() => import("./pages/NotFound"));

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/example",
        element: <Example />
    }
];

export const publicRoutes = [
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '*',
        element: <NotFound />
    } 
];