const models = require('../../models');


const createCoin = async (data) => {
    const result = await models.coin.create(data);
    return result;
}

const getAllCoin = async (search) => {
    search = {include: { model: models.transaction, as: 'transactions' } }
    const result = await models.coin.findAll(search)
    return result;
}

const updateCoin = async(data) => {
    await models.coin.update(data, {where: {id:data.id}});
    return true;
}
const deleteCoin = async (id) => {
    return await models.coin.destroy({where: {id}})
}
const getByIdCoin = async (id) => {
    const result = await models.coin.findOne({where: {id}})
    return result
}


module.exports = {createCoin, getAllCoin, updateCoin, deleteCoin, getByIdCoin}