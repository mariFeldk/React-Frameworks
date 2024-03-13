//Cirar nosso primeiro componente.
//Esse componente será o componente do nosso HEADER
//No header temos 300px de altura ele e do tamanho da tela
//Ele tem uma borda amarela de 2px solida
//Dentro de uma tag header nos temos uma div com o texto "logo" borda vermelha de tamanho 200x200 centralizada na vertical a 30px da lateral esquerda 
import './MeuComponente.css'

function MeuComponente(){
    let logo = "logo"
    return(
        <header>
     <div className='logo'>{logo}</div>
      </header>
    )
     

   
}



export default MeuComponente;