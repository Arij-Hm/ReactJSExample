import React from "react";
import './DataTable.css'  

function DataTable({data}){
    
        return(
            <table className="Table" >
                <thread>
                    <tr>
                        <th>Data</th>
                    </tr>
                </thread>
                <tbody>
                {data.map((element) => (
                    <tr className="spacer">{element}</tr>
                ))}
                    
                </tbody>
            </table>
        )
    
}

export default DataTable;