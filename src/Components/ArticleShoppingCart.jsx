import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6"
import './ArticleShoppingCart.css'
import { useDispatch } from "react-redux"
import { addToCartAction, removeFromCartAction, deleteFromCartAction } from "../Redux/Actions/shoppingCartActions"

const ArticleShoppingCart = ({data}) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addToCartAction(data))
    }

    const removeFromCart = () => {
        dispatch(removeFromCartAction(data))
    }

    const deleteFromCart = () => {
        dispatch(deleteFromCartAction(data))
    }

    return (
        <li className="articleShoppingCart">
            <img src={data.photo} alt={data.title} />
            <div>
                <div>
                    <div>
                        <h3>{data.title}</h3>
                        <h1>{data.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h1>
                    </div>
                    <FaRegTrashCan onClick={deleteFromCart} className="icon" type="button"/>
                </div>
                <div>
                    <button onClick={removeFromCart}><FaMinus/></button>
                    <h2>{data.quantity}</h2>
                    <button onClick={addToCart}><FaPlus/></button>
                </div>
            </div>
        </li>
    )
}

export default ArticleShoppingCart
