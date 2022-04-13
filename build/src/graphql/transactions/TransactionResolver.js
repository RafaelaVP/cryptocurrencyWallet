"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const transactionService_1 = require("../../services/transactions/transactionService");
const TransactionInput_1 = require("./TransactionInput");
const TransactionOutput_1 = require("./TransactionOutput");
let TransactionResolver = class TransactionResolver {
    async createTransaction(data) {
        const result = await (0, transactionService_1.createTransaction)(data);
        return result;
    }
    async updateTransaction(data) {
        try {
            await (0, transactionService_1.updateTransaction)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteTransaction(id) {
        try {
            return await (0, transactionService_1.deleteTransaction)(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllTransaction(search) {
        try {
            const result = await (0, transactionService_1.getAllTransaction)(search);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getByIdTransaction(id) {
        try {
            const result = await (0, transactionService_1.getByIdTransaction)(id);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => TransactionOutput_1.TransactionOutput, {
        description: "Create Transaction"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => TransactionInput_1.CreateTransactionInput, { description: "dados" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TransactionInput_1.CreateTransactionInput]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "createTransaction", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Update Transaction"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => TransactionInput_1.UpdateTransactionInput, { description: "update da carteira" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TransactionInput_1.UpdateTransactionInput]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "updateTransaction", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, {
        description: "Delete Transaction"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "delete id"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "deleteTransaction", null);
__decorate([
    (0, type_graphql_1.Query)(() => [TransactionOutput_1.TransactionOutput], {
        description: "todas as carteiras"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "getAllTransaction", null);
__decorate([
    (0, type_graphql_1.Query)(() => TransactionOutput_1.TransactionOutput, {
        description: "test"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "findone id"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "getByIdTransaction", null);
TransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TransactionResolver);
exports.TransactionResolver = TransactionResolver;
