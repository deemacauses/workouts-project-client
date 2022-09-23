import { useAuthContext } from "../auth"

export const useLogOut = () => {
  const { dispatch } = useAuthContext()

  const logOut = () => {
    // Remove user from storage
    localStorage.removeItem("user")

    // Dispatch log-out action
    dispatch({ type: "LOGOUT" })
  }

  return { logOut }
}
