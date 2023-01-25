import './style.css';
import Card from "../Card";

export default function ExpTrabalho(props) {
    return (
        <section className='secao-trabalho'>
            <div className={props.temaEscuro ? "container-trabalho-dark" : "container-trabalho-light"}>
                <div className='texto-trabalho'>
                    <h2 className={props.temaEscuro ? "texto-trabalho-dark" : "trabalho-h2-light"}>Experiências De Trabalho</h2>

                    <p className={props.temaEscuro ? "texto-trabalho-dark" : "trabalho-p-light"}>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
                </div>
            </div>
            <div id={props.temaEscuro ? "card-container-dark" : "card-container-light"}>
                <div className='cards'>
                    <Card temaEscuro={props.temaEscuro} periodo="JUNHO 2012 - 2016" titulo="Web Designer" empresa="Pied Piper Startup." texto="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
                    <Card temaEscuro={props.temaEscuro} periodo="AGOSTO 2016 - 2019" titulo="Product Designer" empresa="E Corp." texto="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" />
                    <Card temaEscuro={props.temaEscuro} periodo="FEVEREIRO 2019 - 2021" titulo="Digital Consulting" empresa="Arasaka Inc." texto="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
                </div>
            </div>
        </section>
    );
}