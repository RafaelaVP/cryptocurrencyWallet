import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { createTransaction, deleteTransaction, getAllTransaction, getByIdTransaction, updateTransaction } from "../../services/transactions/transactionService";
import { CreateTransactionInput, UpdateTransactionInput } from "./TransactionInput";
import { TransactionOutput } from "./TransactionOutput";


@Resolver()
export class TransactionResolver {
    @Mutation(()=> TransactionOutput, {
        description: "Create Transaction"
    })
   async createTransaction(
       @Arg("data", () => CreateTransactionInput, {description: "dados"})
       data: CreateTransactionInput
   ) {
           const result = await createTransaction(data);
           return result;  
   }
   @Mutation(()=> Boolean, {
       description: "Update Transaction"
   })
   async updateTransaction(
       @Arg("data", () => UpdateTransactionInput, {description: "update da carteira"})
       data:UpdateTransactionInput,
   ){
       try {
           await updateTransaction(data)
           return true
       } catch (error) {
           console.log(error)
       }
   }
   @Mutation(()=> String, {
       description: "Delete Transaction"
   })
   async deleteTransaction(
       @Arg("id", () => ID, {
           description: "delete id"
       })
       id: string
   ){
       try {
           return await deleteTransaction(id)
       } catch (error) {
        console.log(error)
       }
   }

   @Query(()=> [TransactionOutput], {
       description: "todas as carteiras"
   })

   async getAllTransaction(search:any) {
       try {
           const result = await getAllTransaction(search)
           return result
       } catch (error) {
           console.log(error)
       }
   }

   @Query(()=> TransactionOutput, {
       description: "test"
   } ) 
   async getByIdTransaction(
    @Arg("id", () => ID, {
        description: "findone id"
    })
    id: string
){
    try {
       const result =  await getByIdTransaction(id)
       return result
    } catch (error) {
        console.log(error)
    }
}
   
}