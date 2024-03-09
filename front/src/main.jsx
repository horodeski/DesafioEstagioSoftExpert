import React from 'react'
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import routes from './helpers/Routes/Routes';
import { Provider } from 'react-redux';
import store from "./redux/store"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
)
