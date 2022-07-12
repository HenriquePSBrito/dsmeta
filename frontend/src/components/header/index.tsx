import iconLogo from '../../assets/img/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={iconLogo} alt="dsmeta" />
                    <h1>DsMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/HenriquePSBrito"> Henrique PS Brito</a>
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Header;