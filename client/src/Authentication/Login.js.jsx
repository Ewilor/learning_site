import React, { useState } from "react"
import { InputField, Button } from "../atoms"

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-55vh">
      <form className="flex flex-col gap-2.5 w-80" onSubmit={handleSubmit}>
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
          <Button
            label="Log In"
          />
        </div>
      </form>
      <Button
        label="Ти вже щось тут мутився? То давай заходь"
        onClick={() => props.onFormSwitch("register")}
      />
    </div>
  )
}

export default Login
