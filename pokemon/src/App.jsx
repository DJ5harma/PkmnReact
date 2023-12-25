import Nav from "./Components/nav";
import { Routes, Route, useParams } from "react-router-dom";
import PkmnList from "./Components/pkmnList";
import Pkmn from "./Components/pkmn";
import About from "./Components/about";

import "./App.css";
import Home from "./Components/home";
import Error from "./Components/errorPage";
import MoveList from "./Components/moveList";

function App(){

  return(

    <>
      <Nav/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/pkmn_list" element={<PkmnList/>} />

        <Route path="/pkmn_list/:id" element={<Pkmn/>} />

        <Route path="/move_list" element={<MoveList/>} />

        <Route path="*" element={<Error/>}/>

      </Routes>
    </>
  )
}

export default App;