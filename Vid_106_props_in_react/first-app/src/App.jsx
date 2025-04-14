import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
function App() {
 

  return (
    <>
    <Navbar/>
    <div className="cards">
    <Cards title = "Card-1" description = "JAI BABA Ki"/>
    <Cards title = "Card-2" description = "JAI MATA DI"/>
    <Cards title = "Card-3" description = "JAI BHOOLE KI"/>
    <Cards title = "Card-4" description = "JAI SHRI KRISHNA"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
