import {useEffect, useState} from 'react';
import './App.css'

function App() {
  const[nome, setNome] = useState<String>();

  useEffect(() => {
    console.log();
  }, [])

  const defName = (nome: string) => {
    setNome(nome);
  }

  return (
    <>
      <div>
        <strong>Olá {nome}</strong>
        <br></br>
        <button onClick={() => defName('Banana')}>Banana</button>
        <button onClick={() => defName('Tomate')}>Tomate</button>
        <button onClick={() => defName('Morango')}>Morango</button>
      </div>
    </>
  )
}

export default App
