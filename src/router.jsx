import { createBrowserRouter } from "react-router-dom";
import CrudLayout from "./CRUD/Layouts/CrudLayout";
import Home from "./CRUD/Components/Home";
import Create from "./CRUD/Components/Create";
import Update from "./CRUD/Components/Update";
import MainContent from "./SmartFoot/Components/MainContent";
import LandingLayout from "./SmartFoot/Layoutes/LandingLayout";
import App from "./App";

const router = createBrowserRouter([

    {
      path: "/", 
      element: <LandingLayout />, // Wrap the homepage content inside MainLayout
      children: [
        {
          path: "", // The index route
          element: <MainContent /> // Content for the homepage
        },
      ]
    },
    {
      path: "/app", 
      element: <App />,
    },

    {
      path: "/crudlayout",
      element: <CrudLayout/>,
      children: [
        {
          path: 'home',
          element: <Home/>
        },
        {
        path: 'create',
          element: <Create/>
        },
        {
        path: 'edit/:id',
          element: <Update/>
        },
      ],
    },
]);

export default router;
