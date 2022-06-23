import { Field, Float, ID, InputType } from "type-graphql";


@InputType()
export class CreateCoinInput {
    @Field()
    fullname: String

    @Field()
    coin: String

    @Field (() => Float, {
        description: ""
    })
    amont: number

    @Field (() => String, {
        description: ""
    })
    walletAddress: String
}
@InputType()
export class UpdateCoinInput extends CreateCoinInput {
    @Field(()=> ID, )
    id: string
}

