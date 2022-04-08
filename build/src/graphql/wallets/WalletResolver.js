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
exports.Wallet = void 0;
const type_graphql_1 = require("type-graphql");
const walletService_1 = require("../../services/wallets/walletService");
const WalletInput_1 = require("./WalletInput");
const WalletOutput_1 = require("./WalletOutput");
let Wallet = class Wallet {
    async createWallet(data) {
        try {
            const result = await (0, walletService_1.createWallet)(data);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateWallet(data) {
        try {
            await (0, walletService_1.updateWallet)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteWallet(address) {
        try {
            return await (0, walletService_1.deleteWallet)(address);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllWallet(search) {
        try {
            const result = await (0, walletService_1.getAllWallet)(search);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getByAddressWallet(address) {
        try {
            const result = await (0, walletService_1.getByAddressWallet)(address);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => WalletOutput_1.WalletOutput, {
        description: "Create Wallet"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => WalletInput_1.CreateWalletInput, { description: "dados" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WalletInput_1.CreateWalletInput]),
    __metadata("design:returntype", Promise)
], Wallet.prototype, "createWallet", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, {
        description: "Update wallet"
    }),
    __param(0, (0, type_graphql_1.Arg)("data", () => WalletInput_1.UpdateWalletInput, { description: "update da carteira" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WalletInput_1.UpdateWalletInput]),
    __metadata("design:returntype", Promise)
], Wallet.prototype, "updateWallet", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, {
        description: "Delete Wallet"
    }),
    __param(0, (0, type_graphql_1.Arg)("address", () => type_graphql_1.ID, {
        description: "delete address"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Wallet.prototype, "deleteWallet", null);
__decorate([
    (0, type_graphql_1.Query)(() => [WalletOutput_1.WalletOutput], {
        description: "todas as carteiras"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Wallet.prototype, "getAllWallet", null);
__decorate([
    (0, type_graphql_1.Query)(() => WalletOutput_1.WalletOutput, {
        description: "test"
    }),
    __param(0, (0, type_graphql_1.Arg)("address", () => type_graphql_1.ID, {
        description: "findone address"
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Wallet.prototype, "getByAddressWallet", null);
Wallet = __decorate([
    (0, type_graphql_1.Resolver)()
], Wallet);
exports.Wallet = Wallet;
