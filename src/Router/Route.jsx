import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Donation from "../Component/Donation/Donation";
import Statistics from "../Component/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;