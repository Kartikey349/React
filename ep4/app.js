import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import { RestaurantMenu } from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore.js";


const Grocery = lazy(()=> import("./components/Grocery.js"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(()=> {
        const data = {
            name:"Kartikey"
        }
        setUserName(data.name)
    })

    return (
        <Provider store={appStore} >
            <UserContext.Provider value={{loggedInUser: userName}}>
                <div className="m-0 p-0">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />,
            },
            {
                path:"/about",
                element: <About />,
            },{
                path:"/contact",
                element: <Contact />
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },{
                path: "/grocery",
                element:<Suspense fallback={<h1>loading</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)