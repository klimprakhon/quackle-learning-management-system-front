import AuthPanel from "../../../components/AuthPanel";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import loginValidation from "../validators/validate-login";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = loginValidation(input);
    if (error) {
      return setInputError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthPanel title="Login">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col w-full ">
            <Input
              title="Email"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              error={inputError.email}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              title="Password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              error={inputError.password}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button title="Login" />
        </div>
      </AuthPanel>
    </form>
  );
}

export default LoginForm;
