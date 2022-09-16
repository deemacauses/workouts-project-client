import { useContext } from "react"
import { AuthContext } from "../../context/auth"

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw Error("Context must me used inside a Provider")
  return context
}
