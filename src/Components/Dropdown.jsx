import React, { useState, useEffect } from 'react'
import { BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../Redux/Actions/productsActions.js'
import { useParams } from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const array = ["Precio", "Nombre", "Categoría"]
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)
    const [order, setOrder] = useState({
        field: "Precio",
        order: "asc"
    })

    useEffect(() => {
        setOrder({
            field: "Precio",
            order: "asc"
        })
    },[params])

    const handleClick = (field, order) => {
        dispatch(sortProductsAction(field, order))
        setIsVisibleDropdown(false)
        setOrder({
            field: field,
            order: order
        })
    }

    useEffect(() => {},[isVisibleDropdown])

    const handleMouseLeave = () => {
        setIsVisibleDropdown(false)
    }

    return (
        <div>
            <ul onMouseLeave={handleMouseLeave} className={isVisibleDropdown ? 'options visible' : 'options'}>
                {   array.map((elem, indexMap) =>{
                        return (
                            <React.Fragment key={indexMap}>
                                <li onClick={()=>handleClick(elem, "asc")} >
                                    {elem}
                                    <BsChevronDown/>
                                </li>
                                <li onClick={()=>handleClick(elem, "desc")} >
                                    {elem}
                                    <BsChevronUp/>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
            <button onClick={()=>setIsVisibleDropdown(!isVisibleDropdown)} 
            className="select">Ordenar por {order.field} {order.order=="asc" ? <BsChevronDown/> : <BsChevronUp/>}</button>
        </div>
    )
}

export default Dropdown
