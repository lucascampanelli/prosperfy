import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Presentation from './presentation/presentation';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Presentation/>
    }
]);

export default function Routes() {

    return <RouterProvider router={router} />;

}