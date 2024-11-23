import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error />
    },{
        path:"/about",
        element: <About />,
    },{
        path:"/contact",
        element: <Contact />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)