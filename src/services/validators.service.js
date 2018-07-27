const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/;
const MAIL_REGEXP = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
const PASSWORD_MIN_LENGTH = 6;

const required = (value) => value ? undefined : "Field is required";

const passwordValidator = (value) => PASSWORD_REGEXP.test(value) ? undefined : "Password must contains one number, " +
    "uppercase " + " lowercase letter";

const passwordLengthValidator = (value) => value.length >= PASSWORD_MIN_LENGTH ? undefined : "Password must have minimum " +
                                                                                            "number of 6 signs";
const mailValidator = (value) => MAIL_REGEXP.test(value) ? undefined : "Invalid email";

export default {
    required,
    passwordLengthValidator,
    passwordValidator,
    mailValidator
}