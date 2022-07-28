import { Link } from "react-router-dom"
import { classes } from "../../lib/utils"

const Navbar = () => {
  return (
    <nav
      className={classes(
        "flex h-auto w-full max-w-full",
        "absolute top-0 left-0 z-50 py-10",
        "items-center justify-center gap-0"
      )}>
      <div
        className={classes(
          "xl-2:max-w-xl-7 container mx-auto px-5",
          "flex shrink grow-0 basis-full flex-row",
          "items-start justify-start gap-10"
        )}>
        <Link to="/" className={classes("outline-none")}>
          <h1
            className={classes(
              "font-semi-bold text-lg leading-relaxed text-white",
              "uppercase tracking-widest underline underline-offset-4",
              "uppercase decoration-white decoration-2 sm:text-xl"
            )}>
            Workout <span className={classes("text-yellow-400")}>Buddy</span>
          </h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
