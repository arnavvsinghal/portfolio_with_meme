import React from "react"
import img from  "../images/abc.png"
import "../andex.css"
export default function Navbar() {
    return (
        <nav className="nav">
            <img src={img} alt="nav--icon" className="nav--icon" />

        </nav>
    )
}