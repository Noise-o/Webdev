import { FiSearch } from 'react-icons/fi';
import { AiOutlineKey } from "react-icons/ai";
import './styles.css'

function App() {

  return (
    <div className="container">
      <h1 className='title'> Buscador </h1>

      <div className="containerInput">
        <input type = "text"
        placeholder = "Digite seu CEP"> 
        </input>
        <button className='buttonSearch'>
          <AiOutlineKey size={35} color="#000"/>
        </button>
      </div>

      <main>
        <h2> CEP:  </h2>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
      </main>
    </div>

  
  );
};

export default App;
