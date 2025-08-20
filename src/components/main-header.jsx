import { useState } from 'react';
import logo from '../assets/images/logo.svg'

export default function Header(){
    return(
        <header className="main-header">
            <img src={logo} alt="Logo" />
            <nav className="main-nav">
                <button>Home</button>
                <br />
                <button>New</button>
                <br />
                <button>Popular</button>
                <br />
                <button>Trending</button>
                <br />
                <button>Categories</button>
            </nav>
        </header>
    )
}