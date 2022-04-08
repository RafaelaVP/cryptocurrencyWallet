import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { createWallet, deleteWallet, getAllWallet, getByAddressWallet, updateWallet } from "../../services/wallets/walletService";
import { CreateWalletInput, UpdateWalletInput } from "./WalletInput";
import { WalletOutput } from "./WalletOutput";


@Resolver()
export class Wallet {
    @Mutation(()=> WalletOutput, {
        description: "Create Wallet"
    })
   async createWallet(
       @Arg("data", () => CreateWalletInput, {description: "dados"})
       data: CreateWalletInput
   ) {
       try {
           const result = await createWallet(data);
           return result;
       } catch (error) {
           console.log(error)
       }
   }
   @Mutation(()=> Boolean, {
       description: "Update wallet"
   })
   async updateWallet(
       @Arg("data", () => UpdateWalletInput, {description: "update da carteira"})
       data:UpdateWalletInput,
   ){
       try {
           await updateWallet(data)
           return true
       } catch (error) {
           console.log(error)
       }
   }
   @Mutation(()=> String, {
       description: "Delete Wallet"
   })
   async deleteWallet(
       @Arg("address", () => ID, {
           description: "delete address"
       })
       address: string
   ){
       try {
           return await deleteWallet(address)
       } catch (error) {
        console.log(error)
       }
   }

   @Query(()=> [WalletOutput], {
       description: "todas as carteiras"
   })

   async getAllWallet(search:any) {
       try {
           const result = await getAllWallet(search)
           return result
       } catch (error) {
           console.log(error)
       }
   }

   @Query(()=> WalletOutput, {
       description: "test"
   } ) 
   async getByAddressWallet(
    @Arg("address", () => ID, {
        description: "findone address"
    })
    address: string
){
    try {
       const result =  await getByAddressWallet(address)
       return result
    } catch (error) {
        console.log(error)
    }
}
   
}