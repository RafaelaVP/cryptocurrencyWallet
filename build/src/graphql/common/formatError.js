"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatError = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const sequelize_1 = require("sequelize");
const type_graphql_1 = require("type-graphql");
const CustomError_1 = __importDefault(require("../../errors/CustomError"));
const Errors_1 = __importDefault(require("../../errors/Errors"));
const errors = (0, Errors_1.default)();
const convertToApolloError = (customError) => {
    const formated = customError.formatForGraphql();
    return new apollo_server_express_1.ApolloError(formated.message, formated.code, formated.extentions);
};
const formatError = (error) => {
    console.log("testando", error instanceof Error);
    console.log("oiii", error.originalError);
    if (error.originalError instanceof apollo_server_express_1.ApolloError) {
        console.log("error apollo");
        return error;
    }
    else if (error.originalError instanceof CustomError_1.default) {
        console.log("erros");
        return convertToApolloError(error.originalError);
    }
    else if (error.originalError instanceof sequelize_1.UniqueConstraintError) {
        return convertToApolloError(errors.UNIQUE_CONSTRANT_ERROR());
    }
    else if (error.originalError instanceof type_graphql_1.ArgumentValidationError) {
        return convertToApolloError(errors.ARGUMENT_VALIDATION_ERROR(error.originalError));
    }
    else {
        return convertToApolloError(errors.INTERNAL_SERVER_ERROR_DEFAULT());
    }
};
exports.formatError = formatError;
