import logo from '../../assets/logo.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

import './style.css';



export default function Header(props) {
    return(
        <header className={props.temaEscuro ? "header-dark" : "header-light"}>
            <div className='container'>
                <img src={logo} alt="logo" id='logo'/>
                <button onClick={props.alterarTema} className={props.temaEscuro ? "btn-dark" : "btn-light"}><img alt='botão' src={props.temaEscuro ? sun : moon}/></button>
            </div>
        </header>
    );
}