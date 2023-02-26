/* eslint-disable no-unused-vars */
import './Nav.css'
import { Link } from "react-router-dom"

const Nav = () => {

    const Items = ["promos", "picadas", "sandwiches", "quesos", "fiambres", "encurtidos", "snacks", "bebidas", "eventos"]

    return (
        <nav>
            <ul>
                {Items.map((item, indexMap)=>{
                    return(
                        <li key={indexMap}>
                            <Link className='link' to={'/'+item}>{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav
