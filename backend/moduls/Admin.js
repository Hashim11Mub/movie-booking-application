const mangoose = require('mangoose')
const AdminSchema = new mangoose.Schema({
 
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

   addedMoves: [{
    type: mangoose.Types.ObjectId,
    ref: 'Movies'
   }]
});

const admin = mangoose.model('admin', AdminSchema)
module.exports = admin
