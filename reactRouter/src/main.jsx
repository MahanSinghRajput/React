import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route,createBrowserRouter, RouterProvider, createRoutesFromElements, useLoaderData } from "react-router-dom";
import './index.css'
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Github, { githubInfoLoader } from "./components/github/Github";
import Contact from "./components/contact/Contact";
import User from "./components/user/User";
//Method 1
// const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <Layout/>,
//             children: [
//               {path: "", element: <Home/>},
//               {path: "about", element: <About/>},
//               {path: "contact", element: <Contact/>},
//               {path: "github", element: <Github/>},
//             ]
//         }
//     ])

//Method 2
const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path = "/" element = <Layout/> >
                <Route path = "" element = <Home/> />
                <Route path = "about" element = <About/> />
                <Route path = "contact" element = <Contact/> />
                {/* <Route path = "github" element = <Github/> /> */}
                <Route path = "user/:id" element = <User/> />
                {/* this is used to capture elements from url */}
                <Route loader = {githubInfoLoader} path = 'github' element = {<Github/>} />
            </Route>
        )
    )

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <RouterProvider router = {router} />
  // </BrowserRouter>
);