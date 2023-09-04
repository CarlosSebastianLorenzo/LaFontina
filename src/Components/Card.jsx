import './Card.css'
import { MdOutlineShoppingCartCheckout} from 'react-icons/md'

const Card = ({data}) => {
    return (
        <div className="card" >
            <div style={{backgroundImage: `url(${data.photo})`}}></div>
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div>
                    <h3>{data.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h3>
                    <button>
                        Llevalo
                        <MdOutlineShoppingCartCheckout/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
