"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPF_IS_INVALID = void 0;
const apollo_server_express_1 = require("apollo-server-express");
class CPF_IS_INVALID extends apollo_server_express_1.ApolloError {
    constructor() {
        super();
        this.description = 'CPF_IS_INVALID';
        this.message = `The was CPF_IS_INVALID`;
    }
}
exports.CPF_IS_INVALID = CPF_IS_INVALID;
