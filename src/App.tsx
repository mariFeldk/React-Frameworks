
//componente React (função q tem como retorno html)
import "./App.css"
import MeuComponente from "./componentes/MeuComponente"
function App() {
  let nome = "Maria Clara"
  let sobrenome = " Feldkircher de Oliveira"
  return (
    <>
    <MeuComponente></MeuComponente>
    <h1 className="nome">Nome: {nome}</h1>
   <p className="sobrenome">{sobrenome}</p>
   
   </>
    
     
  
  )//retorna JSX - JavaScript XML
}

export default App
