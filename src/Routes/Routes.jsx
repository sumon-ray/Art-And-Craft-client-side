import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import CraftItems from "../Pages/CraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import CraftList from "../Pages/CraftList";
import ErrorPage from "../Pages/ErrorPage";
import CardTableDetails from "../Components/CardTableDetails";
import Update from "../Pages/Update";
import CraftCards from "../Components/CraftCards";
import HomeCardDetails from "../Components/HomeCardDetails";

export const router = createBrowserRouter([
  {
    path:'/*',
    element:<ErrorPage />
  },
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'/',
            element:<Home />,
            loader:()=>fetch('http://localhost:5000/craftCard')

        },
        {
          path:'/details/:id',
          element:<HomeCardDetails />,
          loader:({params})=>fetch(`http://localhost:5000/craftCard/${params.id}`)
          
        },
        {
            path:'/craftCard',
            element:<CraftCards />,
        },
        {
            path:'/allArt',
            element:<CraftItems />,
            loader:()=>fetch('http://localhost:5000/crafts')


        },
        {
            path:'/addCraftItem',
            element:<AddCraftItem />
        },
        {
            path:'/ craftList',
            element:<CraftList />,
        },

        {
          path: '/update/:id',
          element: <Update />,
          loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
        },
        
        {
          path:'/login',
          element: <Login />
      
        },
        {
          path:'/registration',
          element: <Registration />
      
        },
        {
          path:'/details/:id',
          element:<CardTableDetails />,
          loader:()=>fetch('http://localhost:5000/crafts')
        }
      ],
   
    },

  ]);
  


  // jei routes name server e define korbo sei name amake client side er dynamic link e dite hbe 
  // very very important