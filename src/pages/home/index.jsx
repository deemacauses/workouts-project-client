import { useEffect } from "react"
import { classes } from "../../lib/utils"
import { useWorkoutsContext } from "../../hooks/workout"
import WorkoutDetails from "../../components/workout-details"
import WorkoutForm from "../../components/workout-form"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts")
      const json = await response.json()
      if (response.ok) dispatch({ type: "SET_WORKOUTS", payload: json })
    }

    fetchWorkouts()
  }, [dispatch])
  return (
    <main
      className={classes(
        "xl-2:max-w-xl-7 container mx-auto px-5",
        "mt-40 mb-20 items-start justify-center",
        "grid grid-cols-1 gap-5 lg:grid-cols-3"
      )}>
      <div
        className={classes(
          "order-2 col-start-auto col-end-auto",
          "lg:order-1 lg:col-start-1 lg:col-end-3",
          "grid grid-cols-1 gap-5"
        )}>
        {workouts &&
          workouts.map(workout => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </main>
  )
}

export default Home
