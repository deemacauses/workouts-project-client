import { useState } from "react"
import { classes } from "../../lib/utils"

export default function UserForm({ title, paragraph, button, image }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <main
      className={classes(
        "container mx-auto px-5 xl-2:max-w-xl-7",
        "mt-24 mb-20 items-center justify-center",
        "grid grid-cols-1 gap-5 lg:grid-cols-2"
      )}>
      <div
        className={classes(
          "flex h-auto w-full flex-col",
          "items-start justify-center gap-10"
        )}>
        <div
          className={classes(
            "flex h-auto w-full flex-col",
            "items-start justify-center gap-5"
          )}>
          <h2
            className={classes(
              "text-lg font-semi-bold leading-normal text-white",
              "underline decoration-2 underline-offset-4 transition",
              "truncate decoration-transparent group-hover:decoration-white",
              "sm:text-xl md:text-xl-2"
            )}>
            {title}
          </h2>
          <p
            className={classes(
              "font-regular text-sm leading-relaxed text-zinc-500",
              "underline decoration-2 underline-offset-4 transition",
              "decoration-transparent group-hover:decoration-white",
              "md:text-md max-w-full sm:text-base"
            )}>
            {paragraph}
          </p>
        </div>
        <form
          className={classes(
            "flex h-auto w-full flex-col flex-wrap",
            "items-stretch justify-start gap-3"
          )}>
          <input
            className={classes(
              "w-full rounded-lg border-0 border-transparent bg-zinc-800/50",
              "h-16 p-5 text-base font-normal leading-5 outline-none transition",
              "placeholder:opacity-1 text-white placeholder:text-zinc-500",
              "spin-button-hidden focus:ring-2 focus:ring-yellow-400 sm:text-lg"
            )}
            type="email"
            placeholder="E-mail"
          />
          <input
            className={classes(
              "w-full rounded-lg border-0 border-transparent bg-zinc-800/50",
              "h-16 p-5 text-base font-normal leading-5 outline-none transition",
              "placeholder:opacity-1 text-white placeholder:text-zinc-500",
              "spin-button-hidden focus:ring-2 focus:ring-yellow-400 sm:text-lg"
            )}
            type="password"
            placeholder="Password"
          />
          <button
            className={classes(
              "w-full rounded-lg border-0 border-transparent bg-white",
              "h-16 p-5 text-base font-medium leading-5 outline-none transition",
              "text-zinc-900 focus:ring-2 focus:ring-yellow-400 sm:text-lg"
            )}>
            {button}
          </button>
        </form>
      </div>
      <div
        className={classes(
          "flex h-full w-full flex-row",
          "items-center justify-center gap-0"
        )}>
        <img
          src={image}
          alt="Login Lock Icon"
          className={classes("h-full w-full max-w-sm")}
        />
      </div>
    </main>
  )
}
