/* eslint-disable no-unused-vars */
import './Carousel.css'
import { BsCircle, BsCircleFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {useState, useRef, useEffect} from 'react'

const Carousel = ({children}) => {
    const elementsArray = children.map(child => child)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [newArray, setNewArray] = useState(elementsArray);
    const contentSlide = useRef(null)
    const [isDragging, setIsDragging] = useState(false);
    const[cursorXSpace, setCursorXSpace] = useState(0);

    const previous = () => {
        const condition = selectedIndex > 0;
        const previousIndex = condition ? selectedIndex - 1 : elementsArray.length - 1;
        setSelectedIndex(previousIndex);
        contentSlide.current.style.translate = `-${previousIndex*100}vw`;
    };

    const next = () => {
        const condition = selectedIndex < elementsArray.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedIndex(nextIndex);
        contentSlide.current.style.translate = `-${nextIndex*100}vw`;
    };

    const select = (index) => {
        setSelectedIndex(index);
        contentSlide.current.style.translate = `-${index*100}vw`;
    }

    useEffect(() => {
        let intervalID = setInterval(()=>{
            next();
        }, 9000)
        return () =>{
            clearInterval(intervalID);
        }
    })

    const dragStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setCursorXSpace(e.nativeEvent.offsetX - contentSlide.current.scrollLeft) 
    }
    
    const dragging = (e) => {
        if (isDragging) {
            e.preventDefault();
            let movementX = e.nativeEvent.offsetX-cursorXSpace
            movementX < 0 ?
            setTimeout(() => {
                next()
                dragEnd()
            }, 650)
            :
            setTimeout(() => {
                previous()
                dragEnd()
            }, 650)
        }
    }

    const dragEnd = () => {
        setIsDragging(false);
        setCursorXSpace(0) 
    }

    return (
        <div className="wrapper">
            <div className='slide' ref={contentSlide} onPointerDown={dragStart} onPointerMove={dragging} onPointerUp={dragEnd}>
                {newArray.map((element,indexMap)=>{
                    return (
                        <div   key={indexMap} className="contentSlide">
                            {element}
                        </div>
                    )
                })}
            </div>
            <BsChevronLeft onClick={previous} size="2rem" className="icon arrowLeft"/>
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
