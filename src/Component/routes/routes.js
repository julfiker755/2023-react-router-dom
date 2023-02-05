import React from 'react';
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Fridetais from '../Friend/Fridetais';
import Friend from '../Friend/Friend';
import Github from '../Github/Github';
import Githubpage from '../Github/Githubpage';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Details from '../Product/Details';
import Product from '../Product/Product';

const routes = createBrowserRouter([
   {
    path:"/",
    element:<Layout></Layout>,
    children:[
        {
            path:"/home",
            element:<Home></Home>
        },{
            path:"/product",
            loader:async () =>{
                return fetch("https://www.course-api.com/react-store-products")
            },
            element:<Product></Product>,
        },{
                path:"/datails/:did",
                loader:async ({params}) =>{
                   return fetch(`https://www.course-api.com/react-store-single-product?id=${params.did}`)
                },
                element:<Details></Details>
        },{
            path:"/friend",
            loader:async()=>{
             return fetch("https://www.course-api.com/react-store-products")
            },
            element:<Friend></Friend>,
            children:[
                {
                    path:"/friend/:fid",
                    loader:async ({params}) =>{
                        return fetch(`https://www.course-api.com/react-store-single-product?id=${params.fid}`)
                     },
                    element:<Fridetais></Fridetais>
                }
            ]
        },{
            path:"/github",
            element:<Github></Github>
        },{
            path:"/profile/:username",
            element:<Githubpage></Githubpage>
        }
    ]
   },{
    path:"*",
    element:<div className='text-[20px] text-center'>This is Your not page:404</div>
}
  ]);

export default routes;