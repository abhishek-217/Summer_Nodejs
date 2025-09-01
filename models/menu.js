
// Schema for menu in database

const mongoose = require('mongoose');

const Menuschema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price :{
        type : Number,
        require : true
    },

    taste :{
        type : String,
        enum : ['Sweet', 'Sour', 'Spicy'],
        require : true
    },

    is_drink:{
        type : Boolean,
        default : false,
    },

    ingredients :{
        type : [String],
        default : []
    },

    num_sales :{
        type : Number,
        default : 0
    }
})

const menu = mongoose.model('menu', Menuschema);

module.exports = menu;