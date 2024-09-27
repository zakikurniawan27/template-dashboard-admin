import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/scss/style.scss";
import Loader from "./layouts/loader/loader.jsx";
import Error404 from "./pages/error/Error404.jsx";
import Alerts from "./components/ui/Alerts.jsx";
import Badges from "./components/ui/Badges.jsx";
import Buttons from "./components/ui/Buttons.jsx";
import Cards from "./components/ui/Cards.jsx";
import Grid from "./components/ui/Grids.jsx";
import Tables from "./components/ui/Tables.jsx";
import Forms from "./components/ui/Forms.jsx";
import Breadcrumbs from "./components/ui/Breadcrumbs.jsx";
import About from "./pages/about/About.jsx";
import Login from "./pages/auth/Login.jsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error404",
    element: <Error404 />,
  },
  {
    path: "/component/ui/alerts",
    element: <Alerts />,
  },
  {
    path: "/component/ui/badges",
    element: <Badges />,
  },
  {
    path: "/component/ui/buttons",
    element: <Buttons />,
  },
  {
    path: "/component/ui/cards",
    element: <Cards />,
  },
  {
    path: "/component/ui/grid",
    element: <Grid />,
  },
  {
    path: "/component/ui/table",
    element: <Tables />,
  },
  {
    path: "/component/ui/forms",
    element: <Forms />,
  },
  {
    path: "/component/ui/breadcrumbs",
    element: <Breadcrumbs />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={rout} />
    </Suspense>
  </StrictMode>
);
