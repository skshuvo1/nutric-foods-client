import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Recipe from './pages/Recipes/Recipe';
import NotFound from './NotFound/NotFound';
// import SingleChef from './pages/singleChef/SingleChef';
// import Cards from './pages/Cards/Cards';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path:'/', 
        element: <Home></Home>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/recipe/:id',
        element:<Recipe></Recipe>,
        loader:({params}) => fetch(`http://localhost:3000/allData/${params.id}`)
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
