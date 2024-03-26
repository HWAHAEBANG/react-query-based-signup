import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import SigninPage from "../pages/SigninPage";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import UserInfoPage from "../pages/UserInfoPage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/signin',
                element: (
                    <PublicRoute>
                        <SigninPage/>
                    </PublicRoute>)
            },
            {
                path: '/signup',
                element: (
                    <PublicRoute>
                        <SignupPage/>
                    </PublicRoute>)
            },
            {
                path: '/user-info',
                element: (
                    <ProtectedRoute>
                        <UserInfoPage/>
                    </ProtectedRoute>)
            }
        ]
    }
])