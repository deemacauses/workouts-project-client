import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useAuthContext } from "../hooks/auth"
import Navbar from "../components/navbar"
import Home from "../pages/home/"
import LogIn from "../pages/log-in"
import SignUp from "../pages/sign-up"

function App() {
  const { user } = useAuthContext()

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
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/log-in" />}
          />
          <Route
            path="/log-in"
            element={!user ? <LogIn /> : <Navigate to="/" />}
          />
          <Route
            path="/sign-up"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
