const mongoose= require('mongoose')
const standupSchema = new mongoose.Schema({
    bookname:{type:String},
    bookprice:{type:String},
    author:{type:String},
    publisher:{type:String},
    shortdescrip:{type:String},
    category:{type:String},
    img:{type:String},
    rating:{type:String}
})
module.exports = mongoose.model('Book',standupSchema)
