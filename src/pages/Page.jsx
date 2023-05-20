import Home from "./Home"
// eslint-disable-next-line
import Recipe from "./Recipe"
import { Searched } from "./Searched"
import {Routes, Route} from "react-router-dom"
import Category from "./Category"
const Pages = () => {
  return (
    <div className="h-full mt-2">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Category/:type" element={<Category/>}/>
      <Route path="/Recipe/:id" element={<Recipe/>}/>
      <Route path="/Searched/:search" element={<Searched/>}/>
      </Routes>
    </div>
  )
}

export default Pages