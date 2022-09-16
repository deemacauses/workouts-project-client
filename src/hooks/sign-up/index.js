import { useState } from "react"
import { useAuthContext } from "../auth/"

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signUp = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      setIsLoading(false)
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json))
      dispatch({ type: "LOGIN", payload: json })
    }
  }

  return { signUp, isLoading, error }
}
