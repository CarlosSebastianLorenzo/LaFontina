/* eslint-disable no-unused-vars */
import './Carousel.css'
import { BsCircle, BsCircleFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {useState, useRef, useEffect} from 'react'

const Carousel = ({children}) => {
    const elementsArray = children.map(child => child)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [newArray, setNewArray] = useState([elementsArray]);
    const contentSlide = useRef(null)

    const previous = () => {
        const condition = selectedIndex > 0;
        const previousIndex = condition ? selectedIndex - 1 : elementsArray.length - 1;
        setSelectedIndex(previousIndex);
        contentSlide.current.style.transform = `translateX(-${previousIndex*100}vw)`;
    };

    const next = () => {
        const condition = selectedIndex < elementsArray.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedIndex(nextIndex);
        contentSlide.current.style.transform = `translateX(-${nextIndex*100}vw)`;
    };

    const select = (index) => {
        setSelectedIndex(index);
        contentSlide.current.style.transform = `translateX(-${index*100}vw)`;
    }

    useEffect(() => {
        let intervalID = setInterval(()=>{
            next();
        }, 7000)
        return () =>{
            clearInterval(intervalID);
        }
    })

    return (
        <div className='slide'>
            <BsChevronLeft onClick={previous} size="2rem" className="icon arrowLeft"/>
            {newArray.map((element,indexMap)=>{
                return (
                    <div ref={contentSlide} key={indexMap} className="contentSlide">
                        {element}
                    </div>
                )
            })}
            <BsChevronRight onClick={next} size="2rem" className="icon arrowRight"/>
            <div className='selectors'>
                {elementsArray.map((child,indexmap) =>{
                        let selector
                        indexmap === selectedIndex ?
                        selector = <BsCircleFill className="icon" key={indexmap} onClick={()=>select(indexmap)}/> :
                        selector = <BsCircle className="icon" key={indexmap} onClick={()=>select(indexmap)}/>
                        return selector
                    })
                }
            </div>
        </div>
    )
}

export default Carousel
