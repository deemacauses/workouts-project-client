import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Home from "../pages/home/"
import Navbar from "../components/navbar"

function App() {
  const font = [
    "https://fonts.googleapis.com/css",
    [
      ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
      ["display", "swap"].join("=")
    ].join("&")
  ].join("?")

  return (
    <div className="App">
      <Helmet>
        <link href={font} rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
