import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from './Components/AuthContext/AuthContext.jsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';
import {Personalizations, Design, Colors, Options, Finish, Layout, OrderDetails, OrderSummary, TrackOrderNumber} from './Components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/',
    element: < Layout />,
    children: [
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/colors",
        element: <Colors />,
      },
      {
        path: "/options",
        element: <Options />,
      },
      {
        path: "/personalizations",
        element: <Personalizations />,
      },
      {
        path: "/submit",
        element: <Finish />,
      },

    ],
  },
  
  {
    path: "/track-order",
    element: <TrackOrderNumber />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />,
  },
  {
    path: "/order-summary",
    element: <OrderSummary />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
