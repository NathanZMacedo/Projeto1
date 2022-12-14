import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from'react'
import axios from 'axios'
import ListaDePessoas from './components/ListaDePessoas';

function App() {
const [dados , setDados] = useState([]);
useEffect(()=>{
axios.get("https://randomuser.me/api/?results=100")
      .then(resposta => setDados(resposta.data.results))
      .catch(erro => console.log("erro no axios: ", erro))
},[])
console.log(dados);

  return (
    <div className="App">
     <ListaDePessoas  dados = {dados}      />
    </div>
  );
}

export default App;
