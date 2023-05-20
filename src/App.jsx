import Header from "./components/Header"
import Pages from "./pages/Pages"


import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="	w-[70%] mx-auto h-full">
      <BrowserRouter>
      <Header />
      <Pages />
      </BrowserRouter>
    </div>
  )

}

export default App
