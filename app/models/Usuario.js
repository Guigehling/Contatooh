var mongoose = require('mongoose');

module.exports = function () {

    var schema = mongoose.schema({
        login: {
            type: String,
            require: true,
            index: { unique: true }
        },
        nome: {
            type: String,
            require: true
        },
        inclusao: {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model('Usuario', schema);

};