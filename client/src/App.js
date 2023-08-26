import React, { useState } from "react";
import { Register, Login } from "./Authentication";

function App() {
  const [currentForm, setCurrentForm] = useState("login")

  const toggleForm = (formName) => {
    console.log(formName);
    setCurrentForm(formName)
  }

  return (
    <div className="">
    {currentForm === "login"
      ? <Login onFormSwitch={toggleForm}/>
      : <Register onFormSwitch={toggleForm}/>
    }
    </div>
  );
}

export default App;
