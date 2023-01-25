import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';
import google from '../../assets/googleplus.png'

import './style.css';

export default function Footer(props) {
    return (
        <footer className={props.temaEscuro ? "footer-dark" : "footer-light"}>
            <div className='container-footer'>
                <img src={logo} alt="logo" id='logo-footer'/>
                <p id="primeiro-p">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                
                <div className='container-social'>
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={dribble} alt="dribble"/>
                    <img src={behance} alt="behance"/>
                    <img src={google} alt="google-plus"/>
                </div>
                <p className='copyright'>Copyright 2022 © <span>Gabriel Lessa</span></p>
            </div>
        </footer>
    );
}