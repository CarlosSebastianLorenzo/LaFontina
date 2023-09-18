import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdOutlineShoppingCartCheckout } from 'react-icons/md'
import './Details.css'

const Details = () => {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetch('https://apimocha.com/lafontina/picada')
        .then((response) => response.json())
        .then(data => {
            const fetchData = data[`${params.name}`].find(e=>e.title===params.product)
            if (fetchData == undefined) { 
                setProduct({})
                return
            }
            setProduct(fetchData)
        })
        .catch(err => console.error(err))
    },[])

    // if ( product == undefined || product == {}) { return <></>}

    return (
        <main>
            <div className="details" >
                <div style={{backgroundImage: `url(${product.photo})`}}></div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="var(--primary-color)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                        </path>
                    </svg>
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <h3>{product.description}</h3>
                    <div>
                        <h2>{product.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h2>
                        <button onClick={e => e.preventDefault()}>
                            Llevalo
                            <MdOutlineShoppingCartCheckout/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Details
