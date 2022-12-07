import React, { useState} from 'react'
import './Home.css'
import axios from 'axios';

function Home() {
    const [sqlQuery, setSqlQuery] = useState('')

    const url = `http://localhost:8080/addQuery/${sqlQuery}`
    
    console.log(sqlQuery)
    const addQueryToDb = () => {
       
        axios.get(url).then((response) => {
            console.log("inside the post method")
            if (response.data != null) {
                const result = response.data
                if (result['status'] === 'success') {
                    alert(sqlQuery+" Query Added to Db!!")
                } else {
                    alert("Error" + result['error'])
                }

            } else {
                alert('Could not fetch Query to Db')
            }
        })
    }

    return (
        <div className='row'>
            <div id='col'>
                <form action=''>
                    <input type="text" onChange={(e) => setSqlQuery(e.target.value)} placeholder='Enter SQL Query' id='input' />
                    <button type='button' onClick={addQueryToDb} >Submit </button>
                </form>

            </div>
        </div>
    );

}

export default Home