import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <a>
            <Link to="/">Veja todos os filmes</Link>
            </a>
        </div>
    )
}

export default Erro;