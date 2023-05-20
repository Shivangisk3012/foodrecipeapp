import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import Pages from "./pages/pages"

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
