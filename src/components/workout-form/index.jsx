import { useState } from "react"
import { classes } from "../../lib/utils"
import { useWorkoutsContext } from "../../hooks/workout"

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmitButtonClick = async e => {
    e.preventDefault()
    const workout = { title, load, reps }
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: { "Content-Type": "application/json" }
    })

    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    } else if (response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
      setEmptyFields([])
      dispatch({ type: "CREATE_WORKOUT", payload: json })
      console.log("New workout added", json)
    }
  }

  return (
    <form
      className={classes(
        "flex h-auto w-full flex-col flex-wrap",
        "items-stretch justify-start gap-3",
        "order-1 lg:order-2"
      )}
      onSubmit={handleSubmitButtonClick}>
      <input
        onFocus={() => {
          setError("")
          setEmptyFields("")
        }}
        className={classes(
          "w-full rounded-lg border-0 border-transparent bg-zinc-800/50",
          "h-16 p-5 text-base font-normal leading-5 outline-none transition",
          "placeholder:opacity-1 text-white placeholder:text-zinc-500",
          "focus:ring-2 focus:ring-yellow-400 sm:text-lg"
        )}
        type="text"
        placeholder="Exercise Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input
        onFocus={() => {
          setError("")
          setEmptyFields("")
        }}
        className={classes(
          "w-full rounded-lg border-0 border-transparent bg-zinc-800/50",
          "h-16 p-5 text-base font-normal leading-5 outline-none transition",
          "placeholder:opacity-1 text-white placeholder:text-zinc-500",
          "spin-button-hidden focus:ring-2 focus:ring-yellow-400 sm:text-lg"
        )}
        type="number"
        placeholder="Load in (KG)"
        onChange={e => setLoad(e.target.value)}
        value={load}
      />
      <input
        onFocus={() => {
          setError("")
          setEmptyFields("")
        }}
        className={classes(
          "w-full rounded-lg border-0 border-transparent bg-zinc-800/50",
          "h-16 p-5 text-base font-normal leading-5 outline-none transition",
          "placeholder:opacity-1 text-white placeholder:text-zinc-500",
          "spin-button-hidden focus:ring-2 focus:ring-yellow-400 sm:text-lg"
        )}
        type="number"
        placeholder="Reps Count"
        onChange={e => setReps(e.target.value)}
        value={reps}
      />
      <button
        className={classes(
          "w-full rounded-lg border-0 border-transparent bg-white",
          "h-16 p-5 text-base font-medium leading-5 outline-none transition",
          "text-zinc-900 focus:ring-2 focus:ring-yellow-400 sm:text-lg",
          emptyFields.includes("title") || error || !title || !load || !reps
            ? [
                "bg-zinc-800/20 !ring-0 !ring-transparent",
                "cursor-not-allowed text-zinc-600"
              ].join(" ")
            : ""
        )}>
        Add new workout
      </button>
    </form>
  )
}

export default WorkoutForm
