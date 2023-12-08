import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar/NavBar"
import { ItemLIstContainer } from "./Components/ItemLIstContainer/ItemLIstContainer"
import { Catalogo } from "./Components/Catalogo/Catalogo"


export const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemLIstContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemLIstContainer/>}/>
      <Route path="/item/:id" element={<Catalogo/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
    
    
    
  )
}

