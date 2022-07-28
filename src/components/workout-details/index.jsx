import {
  ClockIcon,
  DownloadIcon,
  LightningBoltIcon,
  TrashIcon
} from "@heroicons/react/solid"
import { classes } from "../../lib/utils"
import { useWorkoutsContext } from "../../hooks/workout"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { _id, title, load, reps, createdAt } = workout

  const handleDeleteButtonClick = async () => {
    const params = { method: "DELETE" }
    const response = await fetch("/api/workouts/" + _id, params)
    const json = await response.json()
    if (response.ok) dispatch({ type: "DELETE_WORKOUT", payload: json })
  }

  return (
    <div
      className={classes(
        "group relative flex w-full flex-col",
        "items-start justify-start gap-10 p-8",
        "rounded-lg bg-zinc-800/50 text-white md:p-10"
      )}>
      <div
        className={classes(
          "relative h-auto max-h-full w-full",
          "flex shrink grow-0 basis-full flex-row",
          "items-center justify-between gap-5"
        )}>
        <h2
          className={classes(
            "font-semi-bold text-lg leading-none text-white",
            "underline decoration-2 underline-offset-4 transition",
            "truncate decoration-transparent group-hover:decoration-white",
            "md:text-xl-2 sm:text-xl"
          )}>
          {title}
        </h2>
        <button
          onClick={handleDeleteButtonClick}
          className={classes(
            "h-12 w-12 rounded-lg bg-zinc-800",
            "flex items-center justify-center transition",
            "outline-none hover:bg-white hover:text-zinc-900",
            "focus:translate-y-0.5"
          )}>
          <TrashIcon
            className={classes(
              "relative h-5 w-6 transition",
              "fill-current stroke-transparent"
            )}
          />
        </button>
      </div>
      <div
        className={classes(
          "h-auto w-full shrink grow-0 basis-full",
          "relative flex flex-row flex-wrap gap-3 sm:gap-10",
          "overflow items-center justify-between",
          "flex-col sm:flex-row"
        )}>
        <div
          className={classes(
            "flex items-center justify-center gap-3 sm:gap-6",
            "w-full flex-col sm:w-max sm:flex-row"
          )}>
          <div
            className={classes(
              "flex w-full shrink grow-0 basis-auto",
              "items-center justify-start gap-3",
              "text-base font-normal leading-none text-white",
              "rounded-lg border-2 border-zinc-700/40 p-5",
              "sm:justify-center sm:border-0 sm:border-transparent",
              "sm:w-max sm:rounded-none sm:p-0 sm:text-lg"
            )}>
            <DownloadIcon
              className={classes(
                "relative h-5 w-6 transition",
                "fill-yellow-400 stroke-transparent"
              )}
            />
            <p>
              {load}{" "}
              <span className={classes("truncate leading-6 text-zinc-400")}>
                Load
              </span>
            </p>
          </div>
          <div
            className={classes(
              "flex w-full shrink grow-0 basis-auto",
              "items-center justify-start gap-3",
              "text-base font-normal leading-none text-white",
              "rounded-lg border-2 border-zinc-700/40 p-5",
              "sm:justify-center sm:border-0 sm:border-transparent",
              "sm:w-max sm:rounded-none sm:p-0 sm:text-lg"
            )}>
            <LightningBoltIcon
              className={classes(
                "relative h-5 w-6 transition",
                "fill-yellow-400 stroke-transparent"
              )}
            />
            <p>
              {reps}{" "}
              <span className={classes("truncate leading-6 text-zinc-400")}>
                Reps
              </span>
            </p>
          </div>
        </div>
        <div
          className={classes(
            "flex w-full shrink grow-0 basis-auto",
            "items-center justify-start gap-3",
            "text-base font-normal leading-none text-white",
            "rounded-lg border-2 border-zinc-700/40 p-5",
            "sm:justify-center sm:border-0 sm:border-transparent",
            "sm:w-max sm:rounded-none sm:p-0 sm:text-lg"
          )}>
          <ClockIcon
            className={classes(
              "relative h-5 w-6 transition",
              "fill-yellow-400 stroke-transparent"
            )}
          />
          <p className={classes("truncate leading-6 text-zinc-400")}>
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkoutDetails
