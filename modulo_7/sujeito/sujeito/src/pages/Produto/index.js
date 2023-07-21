import { useParams } from 'react-router-dom';

function Produto(){

    const { id } = useParams();

    return(
        <div>
            <h2>Detalhe do Produto</h2>
            <br/>
            MEU PRODUTO É { id }
        </div>
    )
}

export default Produto;