const mangoose = require('mongoose')
const MovieSchema = new mangoose.MovieSchema({ 
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
actors: [{
    type: String,
    required: true
}],
releaseDate: {
    type: String,
    required: true
},
posterUrl: {
    type: String,
    required: true
},
admin: {
    type: mangoose.Types.ObjectId,
    ref: 'admin',
    required: true
}
})

const movie = mangoose.model('Movies', MovieSchema);
module.exports = movie;