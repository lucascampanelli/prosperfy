import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Presentation from './presentation';
import Main from './main';
import Dashboard from './main/dashboard';


const router = createBrowserRouter([
    {
        path: '/presentation',
        element: <Presentation/>
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/expenses',
                element: <Dashboard />
            },
            {
                path: '/earnings',
                element: <Dashboard />
            },
            {
                path: '/accounts',
                element: <Dashboard />
            },
        ]
    }
]);

export default function Routes() {

    return <RouterProvider router={router} />;

}