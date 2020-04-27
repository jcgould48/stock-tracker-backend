const Stock = require('../../models/Stock')


module.exports = {

addStock: (req, res) => {
    console.log('backend...', req.body.companyName)
    const newStock = new Stock();
    newStock.companyName = req.body.companyName;
    newStock.symbol= req.body.symbol;
    newStock.save().then((stock) => {
      return res.json(stock);
    });
  },

 getFavorites: (req, res) => {
    Stock.find({}).then((stocks) => {
      
      return res.json(stocks);
    });
  },

  deleteFavorite: (req, res) => {
    Stock.findByIdAndDelete({ _id: req.params.id }).then(
      res.json({ message: 'deleted' })
    );
  }

}