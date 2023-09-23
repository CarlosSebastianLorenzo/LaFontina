import './Loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div className='mask' style={{ WebkitMask: `url('../../public/Productos.png') no-repeat center`, WebkitMaskSize: 'contain'}}></div>
        </div>
    )
}

export default Loader
