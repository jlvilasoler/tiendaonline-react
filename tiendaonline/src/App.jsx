import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import { Clicker } from "./components/ItemListContainer/Clicker";


function App() {

  const clickear = () => console.log()

  return (

      <div>
        <Header />

        <Intro mensaje="No te muevas de tu casa, elegi los productos y te los llevamos... "/>
        <ItemListContainer/>
        <Clicker/>

        <Footer/>
      </div>

  )
}

export default App


