import React, { forwardRef } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/Cards";
import Footer from "../../components/Footer";
import styled from "styled-components";
//import style from "./style.module.css";
//import Card from '../../components/Card'
//import {Route,Routes,Navigate} from "react-router-dom";
//import Footer from "../../components/Footer"

function HomeContainer({ className }, ref) {
    return (
        <div className={className} ref={ref}>
            <Header />
            <Card />
            <Footer className={"main-footer"} width={50} />
        </div>
    )
}

const refHome = forwardRef(HomeContainer)

export default styled(refHome)`
    .main-footer{
        background-color:black;
        color:white;
    }
`;