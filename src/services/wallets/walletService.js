const { ApolloError } = require('apollo-server-express');
const models = require('../../models');
const validCpf = require('../../utils/cpfValid');
const validAge = require('../../utils/age')
const createWallet = async (data) => {
     const isCPFinvalid = validCpf.valid(data.cpf);
    if(isCPFinvalid) throw new ApolloError("cpf invalido");
    const minorAge = validAge.calculate(data.birthdate);
    if(minorAge) throw new ApolloError("menor de idade");
    const result = await models.wallet.create(data);
    return result;
}

const getAllWallet = async (search) => {
    const result = await models.wallet.findAll(search)
    return result;
}

const updateWallet = async(data) => {
    await models.wallet.update(data, {where: {address:data.address}});
    return true;
}
const deleteWallet = async (address) => {
    return await models.wallet.destroy({where: {address}})
}
const getByAddressWallet = async (address) => {
    const result = await models.wallet.findOne({where: {address}})
    return result
}

module.exports = {createWallet, getAllWallet, updateWallet, deleteWallet, getByAddressWallet}