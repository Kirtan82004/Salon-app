import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
 function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
        </>
    )
 }

 export default Layout;