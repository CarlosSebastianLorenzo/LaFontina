/* eslint-disable react-hooks/exhaustive-deps */
import './Products.css'
import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import Card from "../Components/Card"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, productsByCategory, filterProductsAction } from '../Redux/Actions/productsActions.js'
import Dropdown from '../Components/Dropdown'

const Products = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const search = useRef()
    const filteredProducts = useSelector(store => store.getProductsReducer.filteredProducts)
    const classesArray = useSelector(store => store.getProductsReducer.productClasses)
    const [classesSelected, setClassesSelected] = useState([])

    useEffect(()=>{
        if (filteredProducts.length===0){
            dispatch(getProducts(params.name))
        }
        else{
            dispatch(productsByCategory(params.name, [], ""))
        }
    },[params])

    const filterByClass = (elem) => {
        if(elem == "All") {setClassesSelected([])}

        else if (classesSelected.includes(elem)) 
        {setClassesSelected(classesSelected.filter(e => e !== elem))}
        
        else{setClassesSelected([...classesSelected, elem])}
    }

    const filterProducts = () => {
        dispatch(filterProductsAction(classesSelected, search.current.value))
    }

    useEffect(()=>{
        filterProducts()
    },[classesSelected])

    return (
        <main className="products">
            <div>
                <div>
                    <input ref={search} type="text" name="search" placeholder=" " onChange={filterProducts}/>
                    <label htmlFor="search">Filtra por Ingredientes</label>
                    <Dropdown/>
                </div>
                <div>
                    <button className={classesSelected.length === 0 ? "selected category" : "category"} 
                    onClick={()=>filterByClass("All")}>Todos</button>
                { 
                    (classesArray == "" || !classesArray) ? <></> :
                    classesArray.map((elem, index) => {
                        return <button className={classesSelected.includes(elem) ? "selected category" : "category"} 
                        key={index} onClick={()=>filterByClass(elem)}>{elem}</button>
                    })
                }
                </div>
            </div>
            <div>
                {
                    (filteredProducts == "" || !filteredProducts) ?
                    <>
                    <section style={{ display:'flex', flexDirection: 'column', gap: '.5rem' }}>
                        <h1>Ups, <span className="acent">Lo Sentimos,</span></h1>
                        <h3>No hay contenido para esa busqueda.</h3>
                    </section>
                    </>
                    :
                    filteredProducts.map((product, indexMap) => {
                    return <Link to={'/'+params.name+'/'+product.title} key={indexMap}>
                        <Card data={product}></Card>
                    </Link>
                })
                }
            </div>
        </main>
    )
}

export default Products
