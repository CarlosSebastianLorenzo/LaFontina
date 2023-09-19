import ArticleShoppingCart from "./ArticleShoppingCart"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaX } from "react-icons/fa6"
import './ShoppingCart.css'
import { useDispatch } from 'react-redux';
import { openCloseCartAction } from '../Redux/Actions/shoppingCartActions';
import { useEffect } from "react"

const ShoppingCart = () => {

    const isHidden = useSelector(store => store.shoppingCartReducer.hidden)
    const articles = useSelector(store => store.shoppingCartReducer.articles)
    const total = useSelector(store => store.shoppingCartReducer.total)
    const dispatch = useDispatch()

    useEffect(() => {},[isHidden])

    const openCloseCart = () => {
        dispatch(openCloseCartAction())
    }

    return (
        <ul className={isHidden ? 'shoppingCartHidden shoppingCart' : 'shoppingCart'}>
            <li>
                <Link className='link' to=''><h3>Ir a mi carrito</h3></Link>
                <FaX onClick={openCloseCart} className="icon" type="button"/>
            </li>
            <ul>
                {articles && articles.map((article, indexMap) => {

                    return <ArticleShoppingCart key={indexMap} data={article} />

                    })
                }
            </ul>
            <li>
                <h2>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h2>
            </li>
        </ul>
    )
}

export default ShoppingCart