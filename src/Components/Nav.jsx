/* eslint-disable no-unused-vars */
import './Nav.css'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import BurguerMenu from './BurguerMenu'

const Nav = () => {

    const Items = [
        {title : "Promos",
        photo : '../../public/Promos.png'},
        {title : "Picadas",
        photo : '../../public/Picadas.png'},
        {title : "Sandwiches",
        photo : '../../public/Sandwiches.png'},
        {title : "Quesos",
        photo : '../../public/Quesos.png'},
        {title : "Fiambres",
        photo : '../../public/Fiambres.png'},
        {title : "Encurtidos",
        photo : '../../public/Encurtidos.png'},
        {title : "Snacks",
        photo : '../../public/Snacks.png'},
        {title : "Bebidas",
        photo : '../../public/Bebidas.png'},
        {title : "Eventos",
        photo : '../../public/Eventos.png'}
    ]
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
                                to={'/'+item.title}>
                                <div className='mask' style={{ WebkitMask: `url(${item.photo}) no-repeat center`, WebkitMaskSize: 'contain'}}></div>
                                {item.title}
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
