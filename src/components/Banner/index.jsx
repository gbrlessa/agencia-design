import './style.css';

export default function Banner(props) {
    return (
        <section className="secao-banner">
            <div className={props.temaEscuro ? "banner-dark" : "banner-light"}>

            </div>
            <div className="container-texto">
                <div className='texto-banner'>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </section>
    );
}