import { Link } from "react-router-dom"
import { classes } from "../../lib/utils"
import { UserCircleIcon } from "@heroicons/react/outline"
import { useLogOut } from "../../hooks/log-out"
import { useAuthContext } from "../../hooks/auth"

const Navbar = () => {
  const links = [
    { name: "Log in", to: "/log-in" },
    { name: "Sign up", to: "/sign-up" }
  ]

  const { logOut } = useLogOut()
  const { user } = useAuthContext()

  const handleButtonClick = () => {
    logOut()
  }

  return (
    <nav
      className={classes(
        "flex h-auto w-full max-w-full",
        "relative top-0 left-0 z-50 py-10",
        "items-center justify-center gap-0"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex shrink grow-0 basis-full flex-row",
          "flex-wrap items-center justify-between gap-10"
        )}>
        <Link to="/" className={classes("outline-none")}>
          <h1
            className={classes(
              "text-lg font-semi-bold leading-relaxed text-white",
              "uppercase tracking-widest underline underline-offset-4",
              "uppercase decoration-white decoration-2 sm:text-xl"
            )}>
            Workout <span className={classes("text-yellow-400")}>Buddy</span>
          </h1>
        </Link>

        {user && (
          <div
            className={classes(
              "flex h-full w-full xs:flex-row",
              "flex-col items-center justify-center gap-5",
              "sm:gap-5 md:h-auto md:w-auto md:gap-10"
            )}>
            <div className="flex items-center justify-center gap-2">
              <UserCircleIcon
                strokeWidth={1.5}
                className={classes(
                  "relative h-6 w-6",
                  "fill-transparent stroke-yellow-400"
                )}
              />
              <span className={classes("text-lg text-white")}>
                {user.email}
              </span>
            </div>

            <button
              onClick={handleButtonClick}
              className={classes(
                "text-sm font-medium leading-none text-zinc-900",
                "not-italic no-underline transition sm:text-base",
                "w-full rounded-lg bg-white py-4 px-6 ",
                "focus:ring-2 focus:ring-yellow-400 md:w-max"
              )}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div
            className={classes(
              "flex h-full w-full xs:flex-row",
              "flex-col items-center justify-center gap-3",
              "sm:gap-5 md:h-auto md:w-auto md:gap-10"
            )}>
            {links.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className={classes(
                  "text-sm font-medium leading-none text-white",
                  "not-italic no-underline transition sm:text-base",
                  "hover:text-yellow-300 focus:text-yellow-500",
                  "w-full rounded-lg bg-zinc-800/60 py-4 px-6",
                  "md:rounded text-center md:w-max md:bg-transparent md:p-0"
                )}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
