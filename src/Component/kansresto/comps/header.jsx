import React from "react";
import Logo from '../images/logo.png'

export const Header=()=>{
    return(
        <>
            <div><img src={Logo} alt="logo" /></div>
            <div className="searchbar">
                <input type="text" placeholder="Find food for beverages" />
            </div>
        </>
    )
}