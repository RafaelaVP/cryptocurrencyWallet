import { Field, Float, ID, InputType } from "type-graphql";


@InputType()
export class CreateCoinInput {
    @Field()
    fullname: String

    @Field()
    coin: String

    @Field (() => Float, {
        description: "kodi"
    })
    amont: number

    @Field (() => String, {
        description: "kodi"
    })
    walletAddress: String
}
@InputType()
export class UpdateCoinInput extends CreateCoinInput {
    @Field(()=> ID, )
    id: number
}