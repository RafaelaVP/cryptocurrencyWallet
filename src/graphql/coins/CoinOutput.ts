import { Field, ID, ObjectType } from "type-graphql";


@ObjectType({
    description: "Lista de moedas"
})
export class CoinOutput {
    @Field({
        description: "nome das moedas"
    })
    fullname:string

    @Field(()=> ID, {
        description: "id"
    })
    id: string

    @Field({
        description: "moeda"
    })
    coin: string

    @Field({
        description: ""
    })
    amont:string
    
    @Field({
        description: ""
    })
    walletAddress:string
}