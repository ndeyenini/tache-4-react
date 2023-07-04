// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BasicExample } from "./Componentes/Navbar";
import { Header } from "./Componentes/Header";

function App() {
  return (
    <div className='App'>
      <BasicExample />
      <Header />
    </div>
  );
}

export default App;
