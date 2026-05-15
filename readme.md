# React 
01Basics - React basic applications
customReact - React under the hood
myApp - React features (hooks,)

# React-router-dom
* react-router-dom is a third party library
* a tag reloads the page.
* <Link to = "">
* <NavLink to = ""> // Navlink gives access to variables isActive and isPending
* isActive matches with the URL and tells if the page is active or not
* to create a router
    Method 1 -
    ```javascript
    //create the router
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
              {path: "", element: <Home/>},
              {path: "about", element: <About/>}
            ]
        }
    ])

    <RouterProvider router = {router} />
    ```
    Method 2 -
    ```javascript
    //create the router
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path = "/" element = <Layout/>>
                <Route path = "" element = <Home/>>
                <Route path = "about" element = <About/>>
                <Route path = "contact" element = <Contact/>>
                <Route path = "github" element = <Github/>>
            </Route>
        )
    )

    <RouterProvider router = {router} />
    ```

* Outlet
    using outlet we can keep the header footer same and keep on changing the mid part.