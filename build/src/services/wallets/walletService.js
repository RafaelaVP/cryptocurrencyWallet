"use strict";
const models = require('../../models');
const validCpf = require('../../utils/cpfValid');
const validAge = require('../../utils/age');
const Errors = require('../../errors/Errors');
const { currentCotation } = require('../currentCotation');
const errors = Errors();
const createWallet = async (data) => {
    const isCPFinvalid = validCpf.valid(data.cpf);
    if (isCPFinvalid) {
        const error = errors.CPF_IS_INVALID();
        throw error;
    }
    const minorAge = validAge.calculate(data.birthdate);
    if (minorAge)
        throw errors.IS_UNDERAGE();
    const result = await models.wallet.create(data);
    return result;
};
const getAllWallet = async (search) => {
    search = { include: { model: models.coin, as: 'coins' } };
    const result = await models.wallet.findAll(search);
    return result;
};
const updateWallet = async (data) => {
    await models.wallet.update(data, { where: { address: data.address } });
    return true;
};
const updateWalletCoins = async (data) => {
    data = { include: { model: models.coin, as: 'coins' } };
    const test = data;
    console.log(test);
    const { walletAddress } = data.params;
    const { quoteTo, currentCoin, value } = data.body;
    const userBalance = await models.coin.findOne({ where: { walletAddress, coin: currentCoin }, attributes: ["amont"] });
    console.log(userBalance);
    if (!userBalance || userBalance.amont < value) {
        throw new Error(`Saldo em ${currentCoin} insuficiente`);
    }
    return true;
};
const deleteWallet = async (address) => {
    return await models.wallet.destroy({ where: { address } });
};
const getByAddressWallet = async (address) => {
    const result = await models.wallet.findOne({ where: { address } });
    return result;
};
module.exports = { createWallet, getAllWallet, updateWallet, deleteWallet, getByAddressWallet, updateWalletCoins };
