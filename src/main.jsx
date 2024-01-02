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
import HeauthyHyaluronicAcid from './components/HeauthyHyaluronicAcid.jsx'
import DermaCream from './components/DermaCream.jsx'
import Verricone from './components/Verricone.jsx'
import SaneRetinol from './components/SaneRetinol.jsx'
import Brushes from './components/Brushes.jsx'
import TivianaTevenziDsaco from './components/TivianaTevenziDsaco.jsx'
import FlitiqueAlmostPowder from './components/FlitiqueAlmostPowder.jsx'
import BlackTouch from './components/BlackTouch.jsx'
import HairJojibaMask from './components/HairJojibaMask.jsx'
import NuviRoller from './components/NuviRoller.jsx'
import AlmondBodyButter from './components/AlmondBodyButter.jsx'
import MichyNeovadiol from './components/MichyNeovadiol.jsx'
import LancomeTeint from './components/LancomeTeint.jsx'
import PuraLuminysPowder from './components/PuraLuminysPowder.jsx'
import RoseQuartzGouache from './components/RoseQuartzGouache.jsx'
import BourjoisVolumeGlamour from './components/BourjoisVolumeGlamour.jsx'
import BodyBalm from './components/BodyBalm.jsx'
import MishanePani from './components/MishanePani.jsx'
import HyaluronicTintedFacialSerum from './components/HyaluronicTintedFacialSerum.jsx'
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
    { path: "saneplantazelaic", element: <SanePlantAzelaic /> },
    { path: "heauthyhyaluronicacid", element: <HeauthyHyaluronicAcid /> },
    { path: "dermacream", element: <DermaCream /> },
    { path: "verriconeblush", element: <Verricone /> },
    { path: "saneretinol", element: <SaneRetinol /> },
    { path: "brushes", element: <Brushes /> },
    { path: "tivianatevenzidsaco", element: <TivianaTevenziDsaco /> },
    { path: "flitiquealmostpowder", element: <FlitiqueAlmostPowder /> },
    { path: "blacktouch", element: <BlackTouch /> },
    { path: "hairjojobamask", element: <HairJojibaMask /> },
    { path: "nuviroller", element: <NuviRoller /> },
    { path: "almondbodybutter", element: <AlmondBodyButter /> },
    { path: "michyneovadiol", element: <MichyNeovadiol /> },
    { path: "lancometeint", element: <LancomeTeint /> },
    { path: "puraluminyspowder", element: <PuraLuminysPowder /> },
    { path: "rosequartzgouache", element: <RoseQuartzGouache /> },
    { path: "bourjoisvolumeglamour", element: <BourjoisVolumeGlamour /> },
    { path: "bodybalm", element: <BodyBalm /> },
    { path: "mishanepani", element: <MishanePani /> },
    { path: "hyaluronictintedfacialserum", element: <HyaluronicTintedFacialSerum /> }
  ]
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
