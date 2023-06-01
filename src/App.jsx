import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [userName, setUserName] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeDepartamento = (e) => setDepartamento(e.target.value);
  

  const onSubmitForm = (e) => {
    e.preventDefault();
    const userNameWithoutSpaces = userName.trim();
    const notieneEspaciosEnBlancoAlComienzo = function(texto) {
      return texto.trimLeft() == texto;
    };

    if ( (notieneEspaciosEnBlancoAlComienzo(userName)) && userNameWithoutSpaces.length > 3 && departamento.length > 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <h1>Datos empleado</h1>
      <form onSubmit={onSubmitForm}>
        
        <input
          type="text"
          disabled={show}
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="text"
          disabled={show}
          placeholder="Departamento"
          value={departamento}
          onChange={onChangeDepartamento}
        />

        <button type="submit">Enviar</button>
        {error && 'Por favor chequea que la información sea correcta'}
      </form>
      {show?
        
        <Card userName = {userName} departamento={departamento}/>
        :
        null
      }
      
    </div>
  )
}

export default App
