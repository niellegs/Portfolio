import Logo from '../../assets/logo.svg';
import "./Header.css"

function Header() {
    return (
        <header className="display-flex space-between position-fixed  primary-color align-center">
            <img src={Logo} alt="logo" />
            <ul className="display-flex">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </header>
    )
}

export default Header;