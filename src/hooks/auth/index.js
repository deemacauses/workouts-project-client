import { AuthContext } from "../../context/auth"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw Error("Context must me used inside a Provider")
  return context
}
