import { useState } from "react"
import { useAuthContext } from "../auth"

export const useSignUp = () => {
  const [errorSignUp, setErrorSignUp] = useState(null)
  const [isLoadingSignUp, setIsLoadingSignUp] = useState(null)
  const { dispatch } = useAuthContext()

  const signUp = async (email, password) => {
    setIsLoadingSignUp(true)
    setErrorSignUp(null)

    const response = await fetch("/api/user/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoadingSignUp(false)
      setErrorSignUp(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json))

      // update the auth context
      dispatch({ type: "LOGIN", payload: json })

      // update loading state
      setIsLoadingSignUp(false)
    }
  }

  return { signUp, isLoadingSignUp, errorSignUp }
}
