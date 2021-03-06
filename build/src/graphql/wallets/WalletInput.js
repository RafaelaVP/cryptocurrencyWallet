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
exports.UpdateWalletCoinsInput = exports.UpdateWalletInput = exports.CreateWalletInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let CreateWalletInput = class CreateWalletInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(7),
    __metadata("design:type", String)
], CreateWalletInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateWalletInput.prototype, "cpf", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "Aniversário"
    }),
    __metadata("design:type", String)
], CreateWalletInput.prototype, "birthdate", void 0);
CreateWalletInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateWalletInput);
exports.CreateWalletInput = CreateWalletInput;
let UpdateWalletInput = class UpdateWalletInput extends CreateWalletInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateWalletInput.prototype, "address", void 0);
UpdateWalletInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateWalletInput);
exports.UpdateWalletInput = UpdateWalletInput;
let UpdateWalletCoinsInput = class UpdateWalletCoinsInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: ""
    }),
    __metadata("design:type", String)
], UpdateWalletCoinsInput.prototype, "quoteTo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: ""
    }),
    __metadata("design:type", String)
], UpdateWalletCoinsInput.prototype, "currentCoin", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, {
        description: ""
    }),
    __metadata("design:type", Number)
], UpdateWalletCoinsInput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateWalletCoinsInput.prototype, "address", void 0);
UpdateWalletCoinsInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateWalletCoinsInput);
exports.UpdateWalletCoinsInput = UpdateWalletCoinsInput;
