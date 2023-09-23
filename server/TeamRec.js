const mongoose = require('mongoose')
const Teamsch = mongoose.Schema({
    TeamName:{
        type:String,
        unique:true
    },
    Vote:{
        type:Number
    }
})

const TeamRec = mongoose.model("TEAMVOTE",Teamsch)
module.exports = TeamRec