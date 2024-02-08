import logo from "../assets/wallet-filled-money-tool.png";
import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="flex justify-center items-center gap py-4 bg-primary-2nd">
                <img className="w-10 h-10 mr-1.5" src={logo} alt="Walletitfy Logo" />
                <p className="font-hammersmith text-3xl relative top-1">Walletitfy</p>
            </nav>
        )
    }
}