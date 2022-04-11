import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import { Wallet } from "./graphql/wallets/WalletResolver";
import {buildSchemaSync} from 'type-graphql'
import { Context } from "./graphql/common/Context";
import { AResolver } from "./graphql/resolver";
import { formatError } from "./graphql/common/formatError";



const schema = buildSchemaSync({
    resolvers:[Wallet, AResolver]
}) 


export const server = new ApolloServer({schema, context: () => ({
    context: Context,
    
}),
  formatError
});
