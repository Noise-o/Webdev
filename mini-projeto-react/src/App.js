import { BiSearch } from "react-icons/bi";
import './styles.css'
function App() {
  return (
    <div className="container">
      <h1>Buscador de CEPs</h1>
      <div> 
        <input className="containerSearch"
        placeholder="Digite um cep">
        </input>
        <buttom className="buttonSearch">
          <BiSearch size={25} />
        </buttom>
        <div>
          <h2>Cep:  </h2>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
