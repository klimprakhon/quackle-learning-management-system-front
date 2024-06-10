import { useState } from "react";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import infoValidation from "../features/authentication/validators/validate-info";

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Settings() {
  const { authUser } = useAuth();

  const initialInput = {
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    email: authUser.lastName,
    password: "qwer1234",
  };
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmitChange = (event) => {
    setIsEdit(false);
    event.preventDefault();
    const error = infoValidation(input);
    if (error) {
      return setInputError(error);
    }

    setInputError({ ...initialInputError });
  };

  return (
    <div className="flex flex-col gap-4 py-14 px-24">
      <h1 className="text-3xl font-semibold">Account Information</h1>
      {isEdit ? (
        <>
          <div className="flex gap-4">
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
          <div className="">
            <Input
              title="Email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              error={inputError.email}
            />
          </div>
          <div>
            <Input
              title="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              error={inputError.password}
            />
          </div>
          <div>
            <Button title="Save" onClick={() => setIsEdit(false)} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h2 className="text-lg font-semibold">First Name</h2>
                <span>{authUser.firstName}</span>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold">Last Name</h2>
                <span>{authUser.lastName}</span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <span>{authUser.email}</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Password</h2>
              <span>********</span>
            </div>
          </div>
          <div>
            <Button
              title="Edit"
              level="tertiary"
              onClick={() => setIsEdit(true)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Settings;
