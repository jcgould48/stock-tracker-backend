const express = require('express');
const router = express.Router();




const {addStock,getFavorites, deleteFavorite} = require('./controllers/stockController');

router.post('/stock', addStock);

router.get('/stocks', getFavorites);

router.delete('/stock/:id', deleteFavorite);

module.exports = router;
