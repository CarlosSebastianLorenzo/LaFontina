import './Card.css'
import { MdOutlineShoppingCartCheckout} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../Redux/Actions/shoppingCartActions'

const Card = ({data}) => {

const dispatch = useDispatch()

const handleClick = (e) => {
    e.preventDefault()
    dispatch(addToCartAction(data))
}

    return (
        <div className="card" >
            <div style={{backgroundImage: `url(${data.photo})`}}></div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--primary-color)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </div>
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div>
                    <h3>{data.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h3>
                    <button onClick={(e)=>handleClick(e)}>
                        Llevalo
                        <MdOutlineShoppingCartCheckout/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
