import React from 'react'
import NavLink from './NavLink'

import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#202124" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="">
                    <img src="/assets/pokeball.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    Desafio Zettalab
                </a>
                <button className="navbar-toggler text-light-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-50 d-flex justify-content-evenly">
                        <Link to="/" style={{ textDecoration: 'none' }}><NavLink text='Home'></NavLink></Link>
                        <Link to="/pokemons" style={{ textDecoration: 'none' }}><NavLink text='Pokemons'></NavLink></Link>
                        <Link to="/berries" style={{ textDecoration: 'none' }}><NavLink text='Berries'></NavLink></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar