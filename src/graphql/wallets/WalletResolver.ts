import { Arg, Mutation, Resolver } from "type-graphql";
import { createWallet } from "../../services/wallets/walletService";
import { CreateWalletInput } from "./WalletInput";
import { WalletOutput } from "./WalletOutput";


@Resolver()
export class Wallet {
    @Mutation(()=> Boolean, {
        description: "Create Wallet"
    })
   async createWallet(
       @Arg("data", () => CreateWalletInput, {description: "dados"})
       data: CreateWalletInput
   ) {
       try {
           const result = await createWallet(data);
           return true;
       } catch (error) {
           console.log(error)
       }
   }
}