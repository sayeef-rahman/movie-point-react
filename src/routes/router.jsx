import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import SearchResult from "../modules/components/searchResult/searchResult";
import Details from "../modules/details/details";
import ErrorPage from "../modules/pages/errorPage";
import Home from "../modules/pages/home";
import PrivateRoute from "./privateRoute";
import Login from "../modules/login/login";
import Explore from "../pages/explore/explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:mediaType/:id",
        element: <PrivateRoute><Details /></PrivateRoute>,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
      {
        path: "/explore/:mediaType",
        element: <Explore />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <PrivateRoute><Dashboard /></PrivateRoute>,
  //   children: [
  //     // User Dashboard
  //     {
  //       path: 'favoritevideos',
  //       element: <FavoriteVideos />
  //     },
  //     {
  //       path: 'watchlater',
  //       element: <WatchLater />
  //     },
  //     // Admin Dashboard
  //     {
  //       path: 'adminhome',
  //       element: <AdminRoute><AdminHome /></AdminRoute>
  //     },
  //     {
  //       path: 'manageusers',
  //       element: <AdminRoute><ManageUsers /></AdminRoute>
  //     },
  //     {
  //       path: 'userprofile',
  //       element: <UserProfile />
  //     },
  //     // update profile
  //     {
  //       path: 'updateProfile/:id',
  //       element: <UserProfileUpdate />,
  //       loader: ({params})=> fetch(`https://movie-app-server-eight.vercel.app/getprofileinfo/${params.id}`)
  //     },
  //   ]
  // },
]);

export default router;