
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ArticleDetail from "../components/ArticleDetal/ArticleDetail";
import Layout from "../components/Layout/Layout";
import { APP_ROUTES } from "../constants";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: APP_ROUTES.HOME,
        element: <Home />,
      },
      {
        path: APP_ROUTES.ARTICLE(":slug"),
        element: <ArticleDetail />,
      },
      {
        path: APP_ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: APP_ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
