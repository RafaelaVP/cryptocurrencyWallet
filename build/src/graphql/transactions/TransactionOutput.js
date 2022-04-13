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
exports.TransactionOutput = void 0;
const type_graphql_1 = require("type-graphql");
let TransactionOutput = class TransactionOutput {
};
__decorate([
    (0, type_graphql_1.Field)({
        description: "valor"
    }),
    __metadata("design:type", Number)
], TransactionOutput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, {
        description: "Id"
    }),
    __metadata("design:type", String)
], TransactionOutput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "enviar para tal"
    }),
    __metadata("design:type", String)
], TransactionOutput.prototype, "sendTo", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "receber de"
    }),
    __metadata("design:type", String)
], TransactionOutput.prototype, "receiveFrom", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "cotação"
    }),
    __metadata("design:type", Number)
], TransactionOutput.prototype, "currentCotation", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, {
        description: "data"
    }),
    __metadata("design:type", Date)
], TransactionOutput.prototype, "datetime", void 0);
TransactionOutput = __decorate([
    (0, type_graphql_1.ObjectType)({
        description: "Listar"
    })
], TransactionOutput);
exports.TransactionOutput = TransactionOutput;
