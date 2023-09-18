import './Header.css'
import { AiOutlineShoppingCart} from "react-icons/ai";
import {BsTelephone, BsWhatsapp} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <Link to='/'>
                <img src="https://ugc.production.linktr.ee/B3uECQm5Q3K1IektQNyd_ZBrxvfWsvKK53mIf" alt="La Fontina" />
                <h1>LA FONTINA</h1>
            </Link>
                <ul>
                    <li>
                        <Link className='link' target='_blank'
                            to="tel:+54-9-351-508-1999">
                            <BsTelephone size='1.3rem'/> 351-508-1999
                        </Link>
                    </li>
                    <li>
                        <Link className='link' target='_blank' 
                            to="https://api.whatsapp.com/send?phone=5493515081999&text=">
                            <BsWhatsapp size='1.3rem'/> 351-508-1999
                        </Link>
                    </li>
                    <li>
                        <Link to="#"><AiOutlineShoppingCart size='2rem'/></Link>
                    </li>
                </ul>
        </header>
    )
}

export default Header