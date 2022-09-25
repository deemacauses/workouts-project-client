import { useAuthContext } from "../auth"
import { useWorkoutsContext } from "../workout"

export const useLogOut = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = useWorkoutsContext()

  const logOut = () => {
    localStorage.removeItem("user") // Remove user from storage
    dispatch({ type: "LOGOUT" }) // Dispatch log-out action
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null })
  }

  return { logOut }
}
