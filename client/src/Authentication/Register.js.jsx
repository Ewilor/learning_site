import React, { useState } from "react"
import { InputField, Button } from "../atoms"

const Register = (props) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [nickname, setNickname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-55vh">
      <form className="flex flex-col gap-2.5 w-80" onSubmit={handleSubmit}>
        <InputField
          label="Nickname"
          value={nickname}
          onChange={setNickname}
          type="nickname"
          placeholder="qwerty (оригінально?)"
          id="nickname"
          name="nickname"
        />
        <InputField
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <InputField
          label="Password"
          value={pass}
          onChange={setPass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div className="flex justify-end">
          <Button label="Log In"/>
        </div>
      </form>
      <Button
        label="Ще немає тебе? То зареєструйся"
        onClick={() => props.onFormSwitch("login")}
      />
    </div>
  )
}

export default Register