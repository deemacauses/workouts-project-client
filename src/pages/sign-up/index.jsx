import lock from "../../assets/lock-icon.png"
import UserForm from "../../components/user-form"

const SignUp = () => {
  return (
    <UserForm
      title="Let's sign-up"
      paragraph={[
        "Hi there and welcome back to your stunning account here",
        "Now, please enter your credentials to access your account data and site"
      ].join(". ")}
      button="Sign up to your account"
      image={lock}
    />
  )
}

export default SignUp
