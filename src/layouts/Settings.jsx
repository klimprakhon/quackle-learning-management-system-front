import { useState } from "react";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import infoValidation from "../features/authentication/validators/validate-info";
import { toast } from "react-toastify";
import authApi from "../APIs/auth";

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Settings() {
  const { authUser } = useAuth();

  // console.log(authUser, "Logged in");

  const initialInput = {
    firstName: authUser?.firstName,
    lastName: authUser?.lastName,
    email: authUser?.email,
    password: "",
  };

  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const error = infoValidation(input);
    if (error) {
      return setInputError(error);
    }

    setInputError({ ...initialInputError });

    try {
      await authApi.updateUserInfo(input);

      // Handle success case
      toast.success("Your info is updated successfully");
      // console.log("User info updated:", response.data);
    } catch (error) {
      toast.error("Error save info");
    } finally {
      setIsEdit(false);
      setInput(initialInput);
    }
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
              type="password"
              value={input.password}
              onChange={handleChangeInput}
              error={inputError.password}
            />
          </div>
          <div>
            <Button title="Save" onClick={handleSave} />
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
