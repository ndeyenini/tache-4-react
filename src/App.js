// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BasicExample } from "./Componentes/Navbar";
import { Header } from "./Componentes/Header";
import { Collectin } from "./Componentes/Collection";
import { Collectionimage } from "./Componentes/Collectionimage";
import { Foote } from "./Componentes/footer";

function App() {
  return (
    <div className='App'>
      <BasicExample />
      <Header />
      <Collectin />
      <Collectionimage />
      <Foote />
    </div>
  );
}

export default App;
