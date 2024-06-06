import { useState } from "react";
import AuthPanel from "../../../components/AuthPanel";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import registerValidation from "../validators/validate-register";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = registerValidation(input);
    if (error) {
      return setInputError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthPanel title="Register">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Input
              title="First Name"
              name="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              error={inputError.firstName}
            />
            <Input
              title="Last Name"
              name="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
              error={inputError.lastName}
            />
          </div>
          <div>
            <Input
              title="Email"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              error={inputError.email}
            />
          </div>
          <div className="flex gap-3">
            <Input
              title="Password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              error={inputError.password}
            />
            <Input
              title="Confirm Password"
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              error={inputError.confirmPassword}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Button title="Get Start" />
        </div>
      </AuthPanel>
    </form>
  );
}

export default RegisterForm;
