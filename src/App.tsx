
//componente React (função q tem como retorno html)
import "./App.css"
function App() {
  let nome = "Maria"
  let sobrenome = " Feldkircher de Oliveira"
  return (
   <div>
    <h1 className="nome">Nome: {nome}</h1>
   <p className="sobrenome">{sobrenome}</p>
   </div>
    
    
     
  
  )//retorna JSX - JavaScript XML
}

export default App
