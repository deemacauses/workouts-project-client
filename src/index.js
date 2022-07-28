import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app"
import { WorkoutsContextProvider } from "./context/workout"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
)
