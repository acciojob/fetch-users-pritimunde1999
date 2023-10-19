import React from "react";


const Table = ({ data }) => {
    return (
        <div>
            <div className="heading">
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Avtar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data? data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td><img src={item.avatar} className="img" /></td>
                            </tr>
                        )) : <p className="error">No data found to display. </p>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;