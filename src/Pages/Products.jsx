import './Products.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import { useParams } from 'react-router-dom'

const Products = () => {

    const params = useParams()
    const [productsArray, setArray] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    useEffect(()=>{
        fetch('src/Utils/Produtcts.json')
        .then((response) => response.json())
        .then(data => {
            setArray(data[`${params.name}`])
            setFilterProducts(data[`${params.name}`])
        })
        .catch(err => console.error(err))
    },[params])

    const handleSearch = (e)=> {
        
        const search = e.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        setFilterProducts(productsArray.filter(e=>{
            
            const words = e.description.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');

            const searchWords = search.split(' ');

            return searchWords.every(searchWord => words.some(word => word.includes(searchWord)));
        }))
    }
    return (
        <main className="products">
            <div>
                <input type="text" name="search" placeholder=" " onChange={(e)=>handleSearch(e.target.value)}/>
                <label htmlFor="search">Filtra por Ingrediente</label>
            </div>
            <div>
                {
                    (filterProducts == "" || !filterProducts) ?
                    <>
                    <section style={{ display:'flex', flexDirection: 'column', gap: '.5rem' }}>
                        <h1>Ups, <span className="acent">Lo Sentimos,</span></h1>
                        <h3>No hay contenido para esa busqueda.</h3>
                    </section>
                    </>
                    :
                    filterProducts.map((product, indexMap) => {
                    return <Link to={'/detalle/'+product.title} key={indexMap}>
                        <Card data={product}></Card>
                    </Link>
                })
                }
            </div>
        </main>
    )
}

export default Products
