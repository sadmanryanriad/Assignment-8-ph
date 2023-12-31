import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Donation from "../Component/Donation/Donation";
import Statistics from "../Component/Statistics/Statistics";
import CardDetails from "../Component/Cards/CardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/:id',
                loader: () => fetch('data.json'),
                element: <CardDetails></CardDetails>
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: () => fetch('data.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
        ]
    }
])

export default myCreatedRoute;