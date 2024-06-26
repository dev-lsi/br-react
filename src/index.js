import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import logo from "./logo.svg";

const Home = () => {
  return <h1>Home</h1>;
};
const About = () => {
  return <h1>About</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, children:[
    {path:"/",element:<Home/>},
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
  ] }
  
]);

const Main = () => {
  return <Outlet />;
};

export const Header = () => {
  return (
    <header className="App-header">
      <Link className="link-component" to={"/"}>Home-link</Link>
      <Link className="link-component" to={"/contact"}>Contact-link</Link>
      <Link className="link-component" to={"/about"}>About-link</Link>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}/>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
