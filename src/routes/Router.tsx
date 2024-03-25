import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import SigninPage from "../pages/SigninPage";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import UserInfoPage from "../pages/UserInfoPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                index: true,
                element: <HomePage/>
            },
            {
                path: '/signin',
                element: <SigninPage/>
            },
            {
                path: '/signup',
                element: <SignupPage/>
            },
            {
                path: '/user-info',
                element: <UserInfoPage/>
            }
        ]
    }
])