"use strict";
const CustomError = require("./CustomError");
module.exports = () => ({
    INTERNAL_SERVER_ERROR_DEFAULT: () => new CustomError({
        mainMessage: "INTERNAL_SERVER_ERROR_DEFAULT",
        code: "INTERNAL_SERVER_ERROR"
    }),
    CPF_IS_INVALID: () => new CustomError({
        mainMessage: "CPF_IS_INVALID",
        code: "BAD_USER_INPUT"
    }),
    IS_UNDERAGE: () => new CustomError({
        mainMessage: "IS_UNDERAGE",
        code: "BAD_USER_INPUT"
    }),
    UNIQUE_CONSTRANT_ERROR: () => new CustomError({
        mainMessage: "UNIQUE_CONSTRANT_ERROR",
        code: "INTERNAL_SERVER_ERROR"
    }),
    ARGUMENT_VALIDATION_ERROR: (error) => new CustomError({
        mainMessage: "ARGUMENT_VALIDATION_ERROR",
        params: [
            {
                key: "field",
                value: error.validationErrors[0].property
            },
            {
                key: "value",
                value: error.validationErrors[0].value
            },
            {
                key: "constraints",
                value: JSON.stringify(error.validationErrors[0].constraints)
            }
        ],
        code: "BAD_USER_INPUT"
    })
});
