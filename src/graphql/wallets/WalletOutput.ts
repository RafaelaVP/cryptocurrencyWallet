import { Field, ID, ObjectType } from "type-graphql";


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
    address: number

    @Field(()=> ID, {
        description: "cpf"
    })
    cpf: string

    @Field(()=> ID, {
        description: "aniversario"
    })
    birthdate: string
    
}