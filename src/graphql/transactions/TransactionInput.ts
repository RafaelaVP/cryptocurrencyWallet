import { Field, Float, ID, InputType } from "type-graphql";


@InputType()
export class CreateTransactionInput {
    @Field(()=> Float, {
        description:""
    })
    value: number

    @Field (() => String, {
        description: "Para quem vai ser transferido"
    })
    sendTo: string

    @Field (() => String, {
        description: "Recebido de quem"
    })
    receiveFrom: String
}
@InputType()
export class UpdateTransactionInput extends CreateTransactionInput {
    @Field(()=> ID, )
    id: string
}