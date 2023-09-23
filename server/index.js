const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const PORT = 5005;
const atlas = "mongodb+srv://riteshborikar2133:riteshborikar321@cluster0.y5ctwtu.mongodb.net/IDEAYAAN?retryWrites=true&w=majority"
const VotingID = require('./Voting')
const TeamRec = require('./TeamRec')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(atlas).then(() => { console.log("database connected") })


app.post('/', async (req, res) => {
    const data = req.body;
    try {
        const votedata = VotingID(data);
        const ress = await votedata.save()
        if (ress) {
            res.send({ data, message: "Vote Recorded" })
        }
        else {
            res.send({ message: "you can only vote once" })
        }
    }
    catch (err) {
        res.send({ message: "error" })
        console.log(err)
    }
})

app.get('/', async (req, res) => {
    const data = await VotingID.find();
    if (data) {
        res.json(data)
        
    }
})


const mess = (m) => {
    console.log(m)
}




app.put('/',async(req,res)=>{
    data = req.body;
    try{
        v1 = await TeamRec.updateOne(
            { TeamName: data.TeamName },
            { $inc: { Vote: 1 } }
        )
        if(v1){
            res.send({message:"vote update",data})
        }
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getvote',async(req,res)=>{
    try{
        const data =await TeamRec.find();
        if(data){
            res.json(data)
        }
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log("connect at port", PORT)
})

