import './Header.css'

const Header = () => {

    return (
        <header>
            <div>
                <img src="../../public/laFontinaLogo.jpg" alt="La Fontina" />
                <h1>La Fontina</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">lugar 1</a>
                    </li>
                    <li>
                        <a href="#">lugar 2</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header