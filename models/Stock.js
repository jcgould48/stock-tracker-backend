const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  companyName: { type: String, default: '' },
  symbol: { type: String, default: '', unique: true },
});

module.exports = mongoose.model('Stock', StockSchema);
