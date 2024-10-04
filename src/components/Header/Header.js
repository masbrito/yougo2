import React from "react";
import { Link } from "react-router-dom";
import { HeaderD } from "./styles";
import logoyougo from "../../assets/logoyougo.png";

export default function Header() {
    return (
        <HeaderD>
            <div className='logo'>
                <Link to='/'>
                    <img src={logoyougo} alt="Logotipo Branca" />
                </Link>
            </div>
            <div className="links">
                <Link to="/">INÍCIO</Link>
                <Link to="/contact">CONTATO</Link>
                <Link to="/tutorial-access">TUTORIAL</Link>
                <Link to="/password">VOUCHER</Link>
            </div>
        </HeaderD>
    );
};