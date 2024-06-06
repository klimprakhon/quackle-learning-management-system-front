import Joi from "joi";

const loginSChema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "string.empty": "email is required." }),
  password: Joi.string()
    .required()
    .messages({ "string.empty": "password is required." }),
});

const loginValidation = (input) => {
  const { error } = loginSChema.validate(input, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});

    return errorMessage;
  }
};

export default loginValidation;
