const mongoose = require('mongoose')
const votingsch = mongoose.Schema({
    TeamName:{
        type:String,
    },
    Email:{
        type:String,
        unique:true,
    }
})

const VotingID = mongoose.model('IDEAYAANVOTE',votingsch)
module.exports = VotingID