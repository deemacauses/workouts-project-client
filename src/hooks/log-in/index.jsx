import { useState } from "react"
import { useAuthContext } from "../auth"

export const useLogIn = () => {
  const [errorLogIn, setErrorLogIn] = useState(null)
  const [isLoadingLogIn, setIsLoadingLogIn] = useState(null)
  const { dispatch } = useAuthContext()

  const logIn = async (email, password) => {
    setIsLoadingLogIn(true)
    setErrorLogIn(null)

    const response = await fetch("/api/user/log-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoadingLogIn(false)
      setErrorLogIn(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json))

      // update the auth context
      dispatch({ type: "LOGIN", payload: json })

      // update loading state
      setIsLoadingLogIn(false)
    }
  }

  return { logIn, isLoadingLogIn, errorLogIn }
}
