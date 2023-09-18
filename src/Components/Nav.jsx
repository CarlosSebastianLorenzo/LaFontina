/* eslint-disable no-unused-vars */
import './Nav.css'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import BurguerMenu from './BurguerMenu'

const Nav = () => {

    const Items = ["Promos", "Picadas", "Sandwiches", "Quesos", "Fiambres", "Encurtidos", "Snacks", "Bebidas", "Eventos"]

    const [navOpen, setNavOpen] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    return (
        <>
        <div>
            <BurguerMenu condition={navOpen} fn={()=>setNavOpen(!navOpen)}/>
        </div>
        <nav className={navOpen ? 'navShown' : 'navHidden'} >
            <ul>
                {/* <li>
                    <NavLink onClick={()=>setNavOpen(!navOpen)}
                        className={({isActive})=> isActive ? 'active link' : 'link'}
                        to='/'>
                        Inicio
                    </NavLink>
                </li> */}
                {Items.map((item, indexMap)=>{
                    return(
                        <li key={indexMap}>
                            <NavLink onClick={()=>setNavOpen(!navOpen)}
                                className={({isActive})=> isActive ? 'active link' : 'link'}
                                to={'/'+item}>
                                {item}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Nav
