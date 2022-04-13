import { Field, ID, ObjectType } from "type-graphql";



@ObjectType({
    description: "Listar"
})
export class TransactionOutput {
    @Field({
        description: "valor"
    })
    value:number

    @Field(()=> ID, {
        description: "Id"
    })
    id: string
  
    @Field({
        description: "enviar para tal"
    })
    sendTo: string

    @Field({
        description: "receber de"
    })
    receiveFrom: string

    @Field({
        description: "cotação"
    })
    currentCotation:number

    @Field (() => Date, {
        description: "data"
    })
    datetime: Date

}