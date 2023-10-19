import React from "react";


const Table= ({data})=>{
    return(
        <div>
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                    {
                        data ? (
                            data.map((ele)=>(
                               <tr>
                                <td>{ele.first_name}</td>
                                <td>{ele.last_name}</td>
                                <td>{ele.email}</td>
                                <td><img src={ele.avatar}/></td>
                               </tr>
                            ))

                        ) : 
                        (
                            <b id="bold" style={{textAlign:"center"}}>No data found to display.</b>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;