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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinOutput = void 0;
const type_graphql_1 = require("type-graphql");
const TransactionOutput_1 = require("../transactions/TransactionOutput");
let CoinOutput = class CoinOutput {
};
__decorate([
    (0, type_graphql_1.Field)({
        description: "nome das moedas"
    }),
    __metadata("design:type", String)
], CoinOutput.prototype, "fullname", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, {
        description: "id"
    }),
    __metadata("design:type", String)
], CoinOutput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "moeda"
    }),
    __metadata("design:type", String)
], CoinOutput.prototype, "coin", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: ""
    }),
    __metadata("design:type", String)
], CoinOutput.prototype, "amont", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: ""
    }),
    __metadata("design:type", String)
], CoinOutput.prototype, "walletAddress", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionOutput_1.TransactionOutput], {
        description: "transactions"
    }),
    __metadata("design:type", Array)
], CoinOutput.prototype, "transactions", void 0);
CoinOutput = __decorate([
    (0, type_graphql_1.ObjectType)({
        description: "Lista de moedas"
    })
], CoinOutput);
exports.CoinOutput = CoinOutput;
