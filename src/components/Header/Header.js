import React from "react";
import { HeaderD } from "./styles";
import logoyougo from "../../assets/logoyougo.png";

export default function Header() {
    return(
        <HeaderD>
            <img src={logoyougo} alt="Logotipo Branca"/>
            <div className="links">
                <a href="/">INÍCIO</a>
                {/*<a href="/about">SOBRE NÓS</a>*/}
                <a href="/contact">CONTATO</a>
                <a href="/tutorial-access">TUTORIAL</a>
                <a href="/password">VOUCHER</a>
            </div>
        </HeaderD>
    );
};