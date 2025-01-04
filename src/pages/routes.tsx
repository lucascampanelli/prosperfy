import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Presentation from './presentation';
import Main from './main';
import Dashboard from './main/dashboard';
import Accounts from './main/accounts';
import Files from './main/files';
import SettingsGeneral from './main/settings/general';
import SettingsGroup from './main/settings/group';
import Settings from './main/settings';
import Menu from './main/menu';
import Expenses from './main/expenses';


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
                element: <Expenses />
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
                element: <Settings />,
                children: [
                    {
                        path: '/settings/',
                        element: <SettingsGeneral />
                    },
                    {
                        path: '/settings/group/',
                        element: <SettingsGroup />
                    }
                ]
            },
            {
                path: 'menu',
                element: <Menu />
            }
        ]
    }
]);

export default function Routes() {

    return <RouterProvider router={router} />;

}