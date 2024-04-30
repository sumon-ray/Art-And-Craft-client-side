import { createBrowserRouter } from "react-router-dom";
// import ArtAndCraftCategories from "../Components/ArtAndCraftCategories";
import AllCard from "../Components/AllCard";
import CardTableDetails from "../Components/CardTableDetails";
import CraftCards from "../Components/CraftCards";
import HomeCardDetails from "../Components/HomeCardDetails";
import AddCraftItem from "../Pages/AddCraftItem";
import CraftItems from "../Pages/CraftItems";
import CraftList from "../Pages/CraftList";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Update from "../Pages/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";
// https://backend-server-mu.vercel.app/
export const router = createBrowserRouter([
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://backend-server-mu.vercel.app/craftCard"),
      },
      {
        path: "/details/:id",
        element: <HomeCardDetails />,
        loader: ({ params }) =>
          fetch(`https://backend-server-mu.vercel.app/craftCard/${params.id}`),
      },
      {
        path: "/craftCard",
        element: <CraftCards />,
      },
      {
        path: "/allArt",
        element: <CraftItems />,
        loader: () => fetch("https://backend-server-mu.vercel.app/crafts"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/ craftList",
        element: (
          <PrivateRoute>
            <CraftList />{" "}
          </PrivateRoute>
        ),
      },
      // *********************
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://backend-server-mu.vercel.app/update/${params.id}`),
      },
      // ***********************
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/details2/:id",
        element: <CardTableDetails />,
        loader: () => fetch("https://backend-server-mu.vercel.app/crafts"),
      },
      {
        path: "/allCard/:id",
        element: <AllCard />,
        loader: ({ params }) =>
          fetch(
            `https://backend-server-mu.vercel.app/craftsByCategory/${params.id}`
          ),
      },
    ],
  },
]);

// jei routes name server e define korbo sei name amake client side er dynamic link e dite hbe
// very very important
