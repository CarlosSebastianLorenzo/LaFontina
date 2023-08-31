import './Header.css'
import { AiOutlineShoppingCart, AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <Link to='/'>
                <img src="../../public/laFontinaLogo.jpg" alt="La Fontina" />
                <h1>La Fontina</h1>
            </Link>
                <ul>
                    <li>
                        <Link className='link' target='_blank' to="tel:+54-9-351-508-1999"><AiOutlinePhone/>351-508-1999</Link>
                    </li>
                    <li>
                        <Link className='link' target='_blank' to="https://api.whatsapp.com/send?phone=5493515081999&text="><AiOutlineWhatsApp/>351-508-1999</Link>
                    </li>
                    <li>
                        <Link to="#"><AiOutlineShoppingCart/></Link>
                    </li>
                </ul>
        </header>
    )
}

export default Header