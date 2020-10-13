const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    hash: { type:String, required: true},
    gender: { type:String, required: true},
    country: { type:String, required: true},
    emailId: { type: String, unique: true, required: true },

});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.hash;
    }
});

module.exports = mongoose.model('users', schema);