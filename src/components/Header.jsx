
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(<>
    <header>
        <button>
        <FontAwesomeIcon icon={faTicketSimple} />            
        </button>
        <nav>
            <ul>
                <li>Início</li>
                <li>Modos de Jogo</li>
                <li>Sobre</li>
            </ul>
        </nav>
    </header>
    </>)
}

export default Header