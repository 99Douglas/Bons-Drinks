import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Header/Navbar.js';
import Contato from './componentes/Body/Contato.js';
import Input from './componentes/Input/Input';

function App() {
  return (
    <div>
      <Navbar />
      <Input type="text" name="nome" htmlFor="">Nome</Input>
      <Contato />
    </div>
  );
}

export default App;
