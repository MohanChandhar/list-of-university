import axios from 'axios'
import  { useEffect, useState } from 'react'
import  "./style.modules.css"
import Count from './Count'

const Fetchdata = () => {
  
    let [data,setdata]=useState([])
    let [data1,setdata1]=useState("")
     useEffect(()=>{
        axios.get(`http://universities.hipolabs.com/search?country=`)
        .then((response)=>{
            console.log("got the data");
            setdata(response.data)
        })

     },[data1])
     
      let changes=(e)=>{
        e.preventDefault()
        setdata1(e.target.value)
     }
     let country=(e)=>{
          e.preventDefault()
          axios.get(`http://universities.hipolabs.com/search?country=${data1}`)
            .then((response)=>{
                console.log("got the data");
                 setdata(response.data)
            })
    
     }
     
     return (
        
    <div className='main'>
        <input type="text" onChange={changes}  placeholder='SEARCH BY COUNTRY NAME' />
        <button onClick={country}>Search</button>
        <div className="nounvi">
        <h3>Total University :{data.length}</h3>
        </div>
        
        <Count/>
        <h3>List of Universities:</h3>
        <div className='total'>
        {
            data.map((x)=>{
                return(
                    <div className='name'>
                        <li>{x.name}-{x.country}</li>
                    </div>
                )
            })
        }
        </div>
      
    </div>
  )
}

export default Fetchdata
