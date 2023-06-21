import React, { useState, useLocation } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./header.css";


function Header2(props) {

    const navigate = useNavigate();

    // console.log(props.userName);
    // console.log(props);

    const handleChange = () => {
        navigate('/walletConnection', { state: props.userName });
    };
    return (

        <div className="topnav">
            <div className="topnavLeft">
                <img className="logoimg" src=".."></img>
            </div>
            <div className="topnavRight" >
                <ul>
                    <li>
                        <AccountCircleIcon className="icon"></AccountCircleIcon>
                        <a href="#news">  {props.userName}</a>
                    </li>

                    <li><button onClick={handleChange}>Log Out</button></li>
                </ul>

            </div>

        </div>
    );
}

export default Header2;
