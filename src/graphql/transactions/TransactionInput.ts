import { Field, ID, InputType } from "type-graphql";


@InputType()
export class CreateTransactionInput {
    @Field()
    value: Number

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