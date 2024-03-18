import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header.tsx'
import Main from './componentes/Main.tsx'
import Footer from './componentes/Footer.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>,
)
