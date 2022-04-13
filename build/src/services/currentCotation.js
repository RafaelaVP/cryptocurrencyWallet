"use strict";
const axios = require('axios');
exports.currentCotation = async (cotation) => axios.get(`https://economia.awesomeapi.com.br/json/last/{tipo_de_moeda}`).then((result) => result.data);
