"use strict";
const models = require('../../models');
const createWallet = async (data) => {
    const result = await models.wallet.create(data);
    return true;
};
const getAllWallet = async (search) => {
    const result = await models.wallet.findAll(search);
    return result;
};
module.exports = { createWallet, getAllWallet };
