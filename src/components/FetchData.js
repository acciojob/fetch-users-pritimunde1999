
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";


const FetchData = () => {
    const[data,setData] = useState(null);

    useEffect(()=>{
       
    },[])

    function implement(){
        axios.get("https://reqres.in/api/users")
        .then(response=>setData(response.data.data))
        .catch(err=>console.log(err.message));
       }

    
  return (
    <div className="main">
      <div className="top">
          <h3>Blue Whales</h3>
          <button onClick={implement} className="btn">Get User List</button>
      </div>

      <Table data={data}/>
    </div>
  )
}

export default FetchData
