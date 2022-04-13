import { Field, ID, ObjectType } from "type-graphql";
import { CoinOutput } from "../coins/CoinOutput";



@ObjectType({
    description: "Lista carteiras"
})
export class WalletOutput {
    @Field({
        description: "nome do individuo"
    })
    name:string

    @Field(()=> ID, {
        description: "Address"
    })
    address: string

    @Field({
        description: "cpf do individuo"
    })
    cpf: string

    @Field({
        description: "aniver do individuo"
    })
    birthdate:string
    
    @Field(() => [CoinOutput], {
        description: "coins"
    })
    coins: []

  
}