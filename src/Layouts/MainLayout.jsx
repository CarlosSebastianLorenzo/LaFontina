import './MainLayout.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import { Outlet, Link } from "react-router-dom"
import {BsWhatsapp} from "react-icons/bs";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <Outlet/>
            
            <Link className='whatsapp' target='_blank' to='https://api.whatsapp.com/send?phone=5493515081999&text='><BsWhatsapp/></Link>
            <Footer/>
        </>
    )
}

export default MainLayout
