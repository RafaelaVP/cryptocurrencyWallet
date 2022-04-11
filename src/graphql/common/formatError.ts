import { ApolloError } from "apollo-server-express";
import { UniqueConstraintError } from "sequelize";
import { ArgumentValidationError } from "type-graphql";
import CustomError from "../../errors/CustomError";
import Errors from "../../errors/Errors";

const errors = Errors();

const convertToApolloError = (customError: CustomError) => {
    const formated = customError.formatForGraphql()
    return new ApolloError(formated.message, formated.code, formated.extentions)
}

export const formatError = (error: any) => {
    console.log("testando", error instanceof Error)
    console.log("oiii",error.originalError)
    if(error.originalError instanceof ApolloError) {
        console.log("error apollo")
        return error;
    }
    else if (error.originalError instanceof CustomError) {
        console.log("erros")
        return convertToApolloError(error.originalError);
    }
    else if(error.originalError instanceof UniqueConstraintError) {
        return convertToApolloError(errors.UNIQUE_CONSTRANT_ERROR())
    }
    else if(error.originalError instanceof ArgumentValidationError) {
        return convertToApolloError(errors.ARGUMENT_VALIDATION_ERROR(error.originalError))
    }
    else {
        return convertToApolloError(errors.INTERNAL_SERVER_ERROR_DEFAULT())
    }
    
}

