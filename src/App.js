import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

import "./main.css"

export default function App() {
    return(
        <div className="flex">
            <div className="flex-item">
            <Header />
            <Meme />
            </div>
        </div>
    )
}