import './Hero.css'
import Carousel from "../Components/Carousel"

const Hero = () => {



    const images = ["https://www.piccadely.com.ar/slide/AGOSTOdeskpicca.webp",
    "https://www.piccadely.com.ar/slide/sistemaBdeskpiccaaaa.webp",
    "https://www.piccadely.com.ar/slide/migasandwichdek.webp"]

    return (
        <main>
            <Carousel>
                {images.map((element, i)=>{
                    return(
                        <div className="banner" key={i} style={{backgroundImage: `url(${element})`, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <h1 >Hola NAHUEL</h1>
                        </div>
                    )
                })}
            </Carousel>
        </main>
    )
}

export default Hero
