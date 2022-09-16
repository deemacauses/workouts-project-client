import gym from "../../assets/gym-icon.png"
import UserForm from "../../components/user-form"

const LogIn = () => {
  return (
    <UserForm
      title="Hi agin!"
      paragraph={[
        "Hi there and welcome back to your stunning account here",
        "Now, please enter your credentials to access your account data and site"
      ].join(". ")}
      button="Log in to your account"
      image={gym}
    />
  )
}

export default LogIn
