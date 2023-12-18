const mangoose = require('mangoose')
const UserSchema = new mangoose.Schema({
    name: {
        type: 'string',
        required: true 
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minlength: 6,
    },

    bookings: [{
        type: mangoose.Types.ObjectId,
        ref:'Booking'
    }]
    
})
const user = mangoose.model('user', UserSchema)
    module.exports = user;