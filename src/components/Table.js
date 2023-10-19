import React from "react";


const Table= ({data})=>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    </tr>
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

                        ) : <p className="error">No data found to display. </p>
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;