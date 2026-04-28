import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import ErrorPage from "../../pages/error-page";
import HomePage from "../../pages/home-page";
import RegisterPage from "../../pages/register-page";
import LoginPage from "../../pages/login-page";
import SpacesPage from "../../pages/spaces-page";
import SpacePage from "../../pages/space-page";
import ProfilePage from "../../pages/profile-page";
import MyBookingPage from "../../pages/my-booking-page";
import ManageBookingPage from "../../pages/manage-booking-page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/spaces',
                element: <SpacesPage />
            },
            {
                path: '/spaces/:id',
                element: <SpacePage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/my-bookings',
                element: <MyBookingPage />
            },
            {
                path: '/manage-bookings',
                element: <ManageBookingPage />
            },
        ]
    }
])