

const Count = () => {
  let highest=(y)=>{
    if(y.target.innerHTML=="Country with Highest"){
      y.target.innerHTML="UNITED STATES"
    }
    else{
      y.target.innerHTML="Country with Highest"
    }
   
  }
  let lowest=(y)=>{
    if(y.target.innerHTML=="Country with Lowest"){
      y.target.innerHTML="UK"
    }
    else{
      y.target.innerHTML="Country with Lowest"
    }
  }
  return (
    <div className='btn'>
    <button className='btn1' onClick={highest}> Country with Highest</button>
    <button className='btn1' onClick={lowest}> Country with Lowest</button>
      
    </div>
  )
}

export default Count
