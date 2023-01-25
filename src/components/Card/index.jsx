import './style.css';

export default function Card(props) {
    return (
        <div className='card-dark'>
            <p className='card-p-dark'>{props.periodo}</p>
            <h3 className='card-h3-dark' id="titulo">{props.titulo}</h3>
            <p className='card-p-dark' id="empresa">{props.empresa}</p>

            <p className='card-p-dark' id="texto">{props.texto}</p>
        </div>
    );
}