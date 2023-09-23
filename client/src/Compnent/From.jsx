import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css'
export default function From() {
    const [data, setData] = useState([])
    const [vote, setVote] = useState();

    const getdata = async () => {
        const res = await axios.get("https://ideayaanvote.onrender.com/getvote")
        if (res) {
            // console.log(res.data)
            setData(res.data)
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res1 = await axios.post("https://ideayaanvote.onrender.com/", vote)
        if(res1){
            console.log(vote)    
        }
        if(res1.data.message=== "Vote Recorded"){
            const res = await axios.put("https://ideayaanvote.onrender.com/", vote)
            alert(res.data.message)
        }
        else{
            alert(res1.data.message)
        }
    }

    const handlechange = async (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setVote({ ...vote, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <h1>IDEAYAAN</h1>
            <div className="voteform">
                <form action="" onSubmit={handlesubmit}>
                    <input type="email" name="Email" id="" placeholder='Enter Email' onChange={handlechange} required/> <br />
                    <input type="text" name="OwnTeam" id="" placeholder='Enter Your Team Name' onChange={handlechange} /> <br />
                    <select name='TeamName' onChange={handlechange} required> 
                        <option value="">Vote for team</option> 
                        {
                            data.map((cand) => {
                                return (
                                    <option key={cand._id} value={cand.TeamName}>{cand.TeamName}</option>
                                )
                            }
                            )
                        }
                    </select> <br />
                    <input type="submit" className='regbtn' value="SUBMIT" />
                </form>
            </div>
        </>
    )
}
