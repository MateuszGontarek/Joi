import "./App.css";
import JoiInput from "./components/JoiInput";
import Joi from "joi";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="App">
      <JoiInput
        placeholder="email"
        value={email}
        onChange={(event) =>setEmail(event.target.value)}
        schema={Joi.string()
          .email({ tlds: { allow: false } })
          .required()}
      />
      <JoiInput
        placeholder="password"
        value={password}
        onChange={(event) =>setPassword(event.target.value)}
        schema={Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required()}
      />
      <JoiInput
        placeholder="text"
        value={text}
        onChange={(event) =>setText(event.target.value)}
        schema={Joi.string().alphanum().required()}
      />
    </div>
  );
}

export default App;
