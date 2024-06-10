import Joi from "joi";

const infoSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "first name is required." }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "last name is required." }),
  email: Joi.string().email({ tlds: false }).messages({
    "string.empty": "email is required.",
    "string.email": "invalid email",
  }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "password is required.",
      "string.pattern.base":
        "password must be at least 6 characters, one alphabet and one number",
    }),
});

const infoValidation = (input) => {
  const { error } = infoSchema.validate(input, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return errorMessage;
  }
};

export default infoValidation;
