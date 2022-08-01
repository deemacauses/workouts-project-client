import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app"
import { WorkoutsContextProvider } from "./context/workout"
import { AuthContextProvider } from "./context/auth"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
