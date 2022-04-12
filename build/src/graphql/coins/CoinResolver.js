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
exports.Coin = void 0;
const type_graphql_1 = require("type-graphql");
const coinService_1 = require("../../services/coins/coinService");
const CoinInput_1 = require("./CoinInput");
const CoinOutput_1 = require("./CoinOutput");
let Coin = class Coin {
    async createCoin(data) {
        try {
            const result = await (0, coinService_1.createCoin)(data);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateCoin(data) {
        try {
            await (0, coinService_1.updateCoin)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteWallet(id) {
        try {
            return await (0, coinService_1.deleteCoin)(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllCoin(search) {
        try {
            const result = await (0, coinService_1.getAllCoin)(search);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getByIdCoin(id) {
        try {
            const result = await (0, coinService_1.getByIdCoin)(id);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => CoinOutput_1.CoinOutput, {
        description: "Create coin"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => CoinInput_1.CreateCoinInput, { description: "dados" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CoinInput_1.CreateCoinInput]),
    __metadata("design:returntype", Promise)
], Coin.prototype, "createCoin", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Update coin"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => CoinInput_1.UpdateCoinInput, { description: "update da moeda" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CoinInput_1.UpdateCoinInput]),
    __metadata("design:returntype", Promise)
], Coin.prototype, "updateCoin", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, {
        description: "Delete coin"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "delete id"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Coin.prototype, "deleteWallet", null);
__decorate([
    (0, type_graphql_1.Query)(() => [CoinOutput_1.CoinOutput], {
        description: "todas as carteiras"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Coin.prototype, "getAllCoin", null);
__decorate([
    (0, type_graphql_1.Query)(() => CoinOutput_1.CoinOutput, {
        description: "test"
    }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, {
        description: "findone id"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Coin.prototype, "getByIdCoin", null);
Coin = __decorate([
    (0, type_graphql_1.Resolver)()
], Coin);
exports.Coin = Coin;
