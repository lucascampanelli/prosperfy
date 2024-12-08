import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Presentation from './presentation';
import Main from './main';
import Dashboard from './main/dashboard';
import Accounts from './main/accounts';
import Files from './main/files';


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
                element: <Accounts />
            },
            {
                path: '/files',
                element: <Files />
            },
            {
                path: '/settings',
                element: <Dashboard />
            },
        ]
    }
]);

export default function Routes() {

    return <RouterProvider router={router} />;

}