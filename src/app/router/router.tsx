import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import ErrorPage from "../../pages/error/error-page";
import HomePage from "../../pages/home/home-page";
import RegisterPage from "../../pages/register/register-page";
import LoginPage from "../../pages/login/login-page";
import SpacesPage from "../../pages/spaces/spaces-page";
import SpacePage from "../../pages/space/space-page";
import ProfilePage from "../../pages/profile/profile-page";
import MyBookingPage from "../../pages/my-bookings/my-booking-page";
import ManageBookingPage from "../../pages/manage-bookings/manage-booking-page";
import UsersAdminPage from "../../pages/admin/UsersAdminPage";

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
            {
                path: '/admin/users',
                element: <UsersAdminPage />
            },
        ]
    }
])