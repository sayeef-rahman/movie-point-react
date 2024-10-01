import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import SearchResult from "../modules/components/searchResult/searchResult";
import Explore from "../modules/explore/explore";
import Login from "../modules/login/login";
import DetailsPage from "../pages/detailsPage";
import ErrorPage from "../pages/errorPage";
import HomePage from "../pages/homePage";
import FavoriteVideos from "../modules/favoriteVideos/favoriteVideos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:mediaType/:id",
        element: <DetailsPage />,
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
      {
        path: "/favorites",
        element: <FavoriteVideos />,
      },
      // {
      //   path: "watch-later",
      //   element: <WatchLater />,
      // },
    ],
  },
]);

export default router;
