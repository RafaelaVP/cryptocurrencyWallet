import {  MinLength } from "class-validator";
import { Field, Float, ID, InputType } from "type-graphql";
import { UpdateCoinInput } from "../coins/CoinInput";


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

@InputType()
export class UpdateWalletCoinsInput {
    @Field(() => String, {
        description: ""
    })
    quoteTo: string

    @Field(() => String, {
        description:""
    })
    currentCoin: string

    @Field (() => Float, {
        description: ""
    })
    value: number

}