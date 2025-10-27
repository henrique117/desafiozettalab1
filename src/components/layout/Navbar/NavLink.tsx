import React from 'react'
import style from './NavLink.module.css'

interface NavLinkProps {
    text: string
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
    return (
        <li className={`nav-item ${style.navLink} rounded`}>
            <a className="nav-link active text-light" aria-current="page" href="">{text}</a>
        </li>
    )
}

export default NavLink