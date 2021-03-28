import './assets/App.css';
import Navbar from './componentes/Header/Navbar.js';
import Contato from './componentes/Contato/Contato.js';
import Input from './componentes/Input/Input';
import Footer from './componentes/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componentes/Home/Home';
import BuscarDrinks from './componentes/Api/BuscarDrinks';
import SobreNos from './componentes/Sobre/SobreNos';
import NossoTime from './componentes/Time/NossoTime';

function App() {
  return (
    <div className="divMae">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contato">
            <Contato className="conteudo" />
          </Route>
          <Route path="/sobre">
            <SobreNos className="conteudo" />
          </Route>
          <Route path="/time">
            <NossoTime className="conteudo" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
