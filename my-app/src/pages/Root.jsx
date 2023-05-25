import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../store/index";
export default function Root() {
    return (
        <>
            <Header/>
            <Provider store={store}>
            <Outlet/>
            </Provider>
            <Footer/>
        </>
    )
}