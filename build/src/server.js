"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const WalletResolver_1 = require("./graphql/wallets/WalletResolver");
const type_graphql_1 = require("type-graphql");
const Context_1 = require("./graphql/common/Context");
const resolver_1 = require("./graphql/resolver");
// import { formatError } from "./graphql/common/formatError";
const CoinResolver_1 = require("./graphql/coins/CoinResolver");
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [WalletResolver_1.Wallet, resolver_1.AResolver, CoinResolver_1.Coin]
});
exports.server = new apollo_server_express_1.ApolloServer({ schema, context: () => ({
        context: Context_1.Context,
    }),
    // formatError
});
