import { WorkoutsContext } from "../../context/workout"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)
  if (!context) throw Error("Context must me used inside a Provider")
  return context
}
