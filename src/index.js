import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Products from './pages/Products';
import Contacts from "./pages/Contacts";
import About from './pages/About';
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";


const appRouter = createBrowserRouter([
  { path: "/", element: <App />, children:[
    {path:"/",element:<Home/>},
    {path:"/products",element:<Products/>},
    { path: "/contacts", element: <Contacts /> },
    { path: "/about", element: <About /> },
  ] }
  
]);

const Main = () => {
  return <Outlet />;
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
