import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Hair from './components/Hair.jsx'
import BodyAndBath from './components/BodyAndBath.jsx'
import Face from './components/Face.jsx'
import Perfumery from './components/Perfumery.jsx'
import Makeup from './components/Makeup.jsx'
import Product from './components/Product.jsx'
import ErrorPage from "./components/ErrorPage.jsx";
import Misolo from './components/Misolo.jsx'
import SanePlantAzelaic from './components/SanePlantAzelaic.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "hair",
    element: <Hair />,
  },
  {
    path: "bodyandbath",
    element: <BodyAndBath />,
  },
  {
    path: "face",
    element: <Face />,
  },
  {
    path: "perfumery",
    element: <Perfumery />,
  },
  {
    path: "makeup",
    element: <Makeup />,
  },
  {
    path: 'product',
    element: <Product />,
    children: [
    { path: "misolo", element: <Misolo /> },
    { path: "saneplantazelaic", element: <SanePlantAzelaic /> }
  ]
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
