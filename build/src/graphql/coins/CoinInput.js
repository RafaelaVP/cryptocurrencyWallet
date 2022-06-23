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
exports.UpdateCoinInput = exports.CreateCoinInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateCoinInput = class CreateCoinInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCoinInput.prototype, "fullname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCoinInput.prototype, "coin", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Float, {
        description: ""
    }),
    __metadata("design:type", Number)
], CreateCoinInput.prototype, "amont", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: ""
    }),
    __metadata("design:type", String)
], CreateCoinInput.prototype, "walletAddress", void 0);
CreateCoinInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCoinInput);
exports.CreateCoinInput = CreateCoinInput;
let UpdateCoinInput = class UpdateCoinInput extends CreateCoinInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateCoinInput.prototype, "id", void 0);
UpdateCoinInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCoinInput);
exports.UpdateCoinInput = UpdateCoinInput;
