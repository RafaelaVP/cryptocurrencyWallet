import { Field, InputType } from "type-graphql";


@InputType()
export class CreateWalletInput {
    @Field()
    name: String

    @Field()
    cpf: String

    @Field (() => String, {
        description: "Aniversário"
    })
    birthdate: string
}