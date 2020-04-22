const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock')

router.post('/stock', (req, res) => {
  const newStock = new Stock();
  newStock.companyName = req.body.companyName;
  newStock.symbol= req.body.symbol;
  newStock.save().then((stock) => {
    return res.json(stock);
  });
});

router.get('/stocks', (req, res) => {
  Stock.find({}).then((stocks) => {
    // blogs.reverse();
    return res.json(stocks);
  });
});

router.delete('/stock/:id', (req, res) => {
  Stock.findByIdAndDelete({ _id: req.params.id }).then(
    res.json({ message: 'deleted' })
  );
});

module.exports = router;
