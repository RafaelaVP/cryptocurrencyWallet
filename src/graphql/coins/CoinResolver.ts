import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { createCoin, deleteCoin, getAllCoin, getByIdCoin, updateCoin } from "../../services/coins/coinService";
import { CreateCoinInput, UpdateCoinInput } from "./CoinInput";
import { CoinOutput } from "./CoinOutput";


@Resolver()
export class Coin {
    @Mutation(()=> CoinOutput, {
        description: "Create coin"
    })
   async createCoin(
       @Arg("data", () => CreateCoinInput, {description: "dados"})
       data: CreateCoinInput
   ) {
       try {
        const result = await createCoin(data);
        return result;   
       } catch (error) {
           console.log(error)
       }
           
   }
   @Mutation(()=> Boolean, {
       description: "Update coin"
   })
   async updateCoin(
       @Arg("data", () => UpdateCoinInput, {description: "update da moeda"})
       data:UpdateCoinInput,
   ){
       try {
           await updateCoin(data)
           return true
       } catch (error) {
           console.log(error)
       }
   }
   @Mutation(()=> String, {
       description: "Delete coin"
   })
   async deleteWallet(
       @Arg("id", () => ID, {
           description: "delete id"
       })
       id: string
   ){
       try {
           return await deleteCoin(id)
       } catch (error) {
        console.log(error)
       }
   }

   @Query(()=> [CoinOutput], {
       description: "todas as carteiras"
   })

   async getAllCoin(search:any) {
       try {
           const result = await getAllCoin(search)
           return result
       } catch (error) {
           console.log(error)
       }
   }

   @Query(()=> CoinOutput, {
       description: "test"
   } ) 
   async getByIdCoin(
    @Arg("id", () => ID, {
        description: "findone id"
    })
    id: string
){
    try {
       const result =  await getByIdCoin(id)
       return result
    } catch (error) {
        console.log(error)
    }
}
   
}