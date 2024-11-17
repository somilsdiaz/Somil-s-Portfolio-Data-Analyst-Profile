import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from "../Pages/MainPage";
import Proj1 from "../Pages/Proj1";
import Proj2 from "../Pages/Proj2";
import Proj3 from "../Pages/Proj3";
import Proj4 from "../Pages/Proj4";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/twitter-data-network",
        element: <Proj1 />,
    },
    {
        path: "/loan-defaulter-prediction",
        element: <Proj2 />,
    },
    {
        path: "/project3",
        element: <Proj3 />,
    },
    {
        path: "/project4",
        element: <Proj4 />,
    },
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};

export default AppRoutes;
