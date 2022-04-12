import {  MinLength } from "class-validator";
import { Field, ID, InputType } from "type-graphql";
import { CreateCoinInput } from "../coins/CoinInput";


@InputType()
export class CreateWalletInput {
    @Field()
    @MinLength(7)
    name: String

    @Field()
    cpf: String

    @Field (() => String, {
        description: "Aniversário"
    })
    birthdate: string

}
@InputType()
export class UpdateWalletInput extends CreateWalletInput {
    @Field(()=> ID, )
    address: number
}