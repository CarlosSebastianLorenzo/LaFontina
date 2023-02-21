import './Hero.css'
import Carousel from "../Components/Carousel"
import { Link } from 'react-router-dom'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Hero = () => {



    const images = ["https://lh3.googleusercontent.com/p/AF1QipOa_cjaIockC5tiW9L3fttNuGGdE3xehmmu-myl=w1080-h608-p-no-v0",
    "https://lh3.googleusercontent.com/p/AF1QipM0a8dofUIqTwhLi_pMDqd9bIAEwIJ3e9bWh_32=w600-h0",
    "https://lh3.googleusercontent.com/p/AF1QipMNpFoUOY66u9P7uc6EXLjhQX14tOPRBQzwhxNg=w960-h960-n-o-v1",
    "https://lh3.googleusercontent.com/p/AF1QipODF1P2s5FiuBSGUEPTKjLHc5FRyQRHzq1mWE-h=w960-h960-n-o-v1"]

    return (
        <main>
            <Carousel>
                {images.map((element, i)=>{
                    return(
                        <div className="banner" key={i} style={{backgroundImage: `url(${element})`, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <h1 className="titleBanner">Regalate una Picada</h1>
                            <Link to='/Promos' className='button'>PEDI HOY<RxDoubleArrowRight size='3rem'/></Link>
                        </div>
                    )
                })}
            </Carousel>
        </main>
    )
}

export default Hero
