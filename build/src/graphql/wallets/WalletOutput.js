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
exports.WalletOutput = void 0;
const type_graphql_1 = require("type-graphql");
let WalletOutput = class WalletOutput {
};
__decorate([
    (0, type_graphql_1.Field)({
        description: "nome do individuo"
    }),
    __metadata("design:type", String)
], WalletOutput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID, {
        description: "Address"
    }),
    __metadata("design:type", String)
], WalletOutput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "cpf do individuo"
    }),
    __metadata("design:type", String)
], WalletOutput.prototype, "cpf", void 0);
__decorate([
    (0, type_graphql_1.Field)({
        description: "aniver do individuo"
    }),
    __metadata("design:type", String)
], WalletOutput.prototype, "birthdate", void 0);
WalletOutput = __decorate([
    (0, type_graphql_1.ObjectType)({
        description: "Lista carteiras"
    })
], WalletOutput);
exports.WalletOutput = WalletOutput;
