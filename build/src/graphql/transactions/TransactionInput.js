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
exports.UpdateTransactionInput = exports.CreateTransactionInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateTransactionInput = class CreateTransactionInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateTransactionInput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "Para quem vai ser transferido"
    }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "sendTo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, {
        description: "Recebido de quem"
    }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "receiveFrom", void 0);
CreateTransactionInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateTransactionInput);
exports.CreateTransactionInput = CreateTransactionInput;
let UpdateTransactionInput = class UpdateTransactionInput extends CreateTransactionInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UpdateTransactionInput.prototype, "id", void 0);
UpdateTransactionInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateTransactionInput);
exports.UpdateTransactionInput = UpdateTransactionInput;
