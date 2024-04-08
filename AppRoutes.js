import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import AppLayout from './src/AppLayout.js'

import UserProfile from './UserComponents/UserProfile'

import Login from './Components/Login'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allbuses',
                element: <AllBusesList/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/allbusstand',
                element: <AllBusStands/>
            },
            {
                path: '/pro',
                element: <Home/>
            },
            {
                path: '/profile',
                element: <UserProfile/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
    // {
    //     path: '/user',
    //     element: <PrivateRoute component={UserOutlet}/>,
    //     children : [
    //         {
    //             path: 'dashboard',
    //             element: <UserDashboard/>
    //         }
    //     ]
    // },
])