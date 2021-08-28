import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.stales}>
           <NavLink to ={PATH.PRE_JUNIOR} className={s.stylejunior} activeClassName={s.active}>PRE_JUNIOR</NavLink>
           <NavLink to ={PATH.JUNIOR} className={s.stylejunior} activeClassName={s.active}>JUNIOR</NavLink>
           <NavLink to ={PATH.JUNIOR_PLUS} className={s.stylejunior} activeClassName={s.active}>JUNIOR+</NavLink>
        </div>
    )
}

export default Header
