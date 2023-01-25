import './style.css';

export default function Card(props) {
    return (
        <div className={props.temaEscuro ? "card-dark" : "card-light"}>
            <p className={props.temaEscuro ? "card-p-dark" : "card-p-light"}>{props.periodo}</p>
            <h3 className={props.temaEscuro ? "card-h3-dark" : "card-h3-light"} id="titulo">{props.titulo}</h3>
            <p className={props.temaEscuro ? "card-p-dark" : "card-p-light"} id="empresa">{props.empresa}</p>

            <p className={props.temaEscuro ? "card-p-dark" : "card-p-light"} id="texto">{props.texto}</p>
        </div>
    );
}