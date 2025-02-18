import React from "react";
import './style.css'
import './sty2.css'
import { Header } from "./comps/header";
import { LeftContent } from "./comps/left";
import { RightContent } from "./comps/right";
import { Aside } from "./comps/Aside";
import '../kansresto/comps/aside.css';

export const Layout=()=>{
    return(
        <div className="container">
            <div className="header">
                <Header/>
            </div>
            <div className="main-content">
            <div className="left">
                <LeftContent/>
                {/* <Aside/> */}
            </div>
            <div className="right">
                <RightContent/>
            </div>
            </div>
            
        </div>
    )
}