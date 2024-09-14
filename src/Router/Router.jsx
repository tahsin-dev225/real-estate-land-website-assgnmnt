
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import UserUpdate from '../Pages/UserUpdate/UserUpdate';
import Details from '../Pages/Estate/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from '../Pages/ErrorPage.jsx/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/userUpdate',
                element:<UserUpdate></UserUpdate>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute> ,
                loader:()=>fetch('../land.json')
            }
        ]
    }
])

export default router;