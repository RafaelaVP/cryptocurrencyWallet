const models = require('../../models');
// const currentCotation = require('../currentCotation');


const createTransaction = async (data) => {
    const result = await models.transaction.create(data);
    return result;
}

const getAllTransaction = async (search) => {
    // const cotation = currentCotation.currentCotation()
    const result = await models.transaction.findAll(search)
    return result;
}

const updateTransaction = async(data) => {
    await models.transaction.update(data, {where: {id:data.id}});
    return true;
}
const deleteTransaction = async (id) => {
    return await models.transaction.destroy({where: {id}})
}
const getByIdTransaction = async (id) => {
    const result = await models.transaction.findOne({where: {id}})
    return result
}

module.exports = {createTransaction, getAllTransaction, updateTransaction, deleteTransaction, getByIdTransaction}