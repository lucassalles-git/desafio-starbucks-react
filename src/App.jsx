import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Sobre from "./Components/Sobre/Sobre"
import Novidades from "./Components/Novidades1/Novidades"
import Home from "./Components/Home/Home"
import Home2 from "./Components/Home2/Home2"
import Home3 from "./Components/Home3/Home3"
import GlobalStyle from "./Components/globalStyle"

export default function App(){
  return(
<>

<BrowserRouter>
<Header/>
<GlobalStyle/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Novidades" element={<Novidades/>}/>
  <Route path="/Sobre" element={<Sobre/>}/>

  <Route path="/" element={<Home/>}/>
  <Route path="/Home2" element={<Home2/>}/>
  <Route path="/Home3" element={<Home3/>}/>
</Routes>
</BrowserRouter>
</>
  )
}