import Header from './components/Header';
import Banner from './components/Banner';
import ExpTrabalho from './components/ExpTrabalho';
import Footer from './components/Footer';
import { useState } from 'react';

import './App.css';

function App() {

  const [temaEscuro, setTemaEscuro] = useState(false);

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className="App">
      <Header alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <Banner temaEscuro={temaEscuro} />
      <ExpTrabalho temaEscuro={temaEscuro}/>
      <Footer temaEscuro={temaEscuro}/>
    </div>
  );
}

export default App;
