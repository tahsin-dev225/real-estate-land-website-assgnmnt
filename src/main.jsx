import  {React,  StrictMode }  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProviders from './Provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </StrictMode>
)
