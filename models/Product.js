const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName  : String, 
    productPrice : Number, 
    description :  String,
    category : String
})

module.exports = Product = mongoose.model('products', productSchema )