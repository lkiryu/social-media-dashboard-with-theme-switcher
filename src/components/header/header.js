import React from "react";
import Titles from "../titles/titles";
import Button from "../button/button";

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Titles/>

            <Button/>
        </header>
    )
}

export default Header