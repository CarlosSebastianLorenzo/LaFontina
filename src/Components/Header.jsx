import './Header.css'
import { AiOutlineShoppingCart} from "react-icons/ai";
import {BsTelephone, BsWhatsapp} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { openCloseCartAction } from '../Redux/Actions/shoppingCartActions';
import ShoppingCart from '../Components/ShoppingCart'


const Header = () => {
    const dispatch = useDispatch()
    const quantity = useSelector(store => store.shoppingCartReducer.quantity)

    const openCloseCart = () => {
        dispatch(openCloseCartAction())
    }

    return (
        <header>
            <Link to='/'>
                <img src="../../public/LaFontinaLogo.png" alt="La Fontina" />
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
                        <AiOutlineShoppingCart onClick={openCloseCart} className='icon' size='2rem'/>
                        <ShoppingCart/>
                        {quantity > 0 && quantity ? <p className="quantityCart">{quantity}</p> : ""}
                    </li>
                </ul>

        </header>
    )
}

export default Header