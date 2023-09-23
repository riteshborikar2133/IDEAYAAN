import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css'
export default function From() {
    const [data, setData] = useState([])
    const [vote, setVote] = useState();

    const getdata = async () => {
        const res = await axios.get("http://localhost:5005/getvote")
        if (res) {
            console.log(res.data)
            setData(res.data)
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put("http://localhost:5005/", vote)
        if (res) {
            console.log(res)
            console.log(vote)
        }
        const res1 = await axios.post("http://localhost:5005/", vote)
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
                    <input type="email" name="Email" id="" placeholder='Enter Email' onChange={handlechange} />
                    <select name='TeamName' onChange={handlechange}>
                        <option value="">Vote for team</option>
                        {
                            data.map((cand) => {
                                return (
                                    <option key={cand._id} value={cand.TeamName}>{cand.TeamName}</option>
                                )
                            }
                            )
                        }
                    </select>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </>
    )
}
