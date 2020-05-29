import React from "react"
import { MDBDataTable } from "mdbreact";

function Table (props){
  var data = {
    columns: [
      {
        label: "firstname",
        field: "firstname",
        sort: "asc",
        width: 150  
      },
      {
        label: "lastname",
        field: "lastname",
        sort: "asc",
        width: 150  
      },
      {
        label: "gender",
        field: "gender",
        sort: "asc",
        width: 150  
      },
      {
        label: "email",
        field: "email",
        sort: "asc",
        width: 150  
      },
      {
        label: "id",
        field: "id",
        sort: "asc",
        width: 150  
      }
    ],
    rows: props.empRecords
  }
  return (<div>
      <p>using API call to generate a list of employee and using data tables</p>
      <MDBDataTable striped bordered hover data={data} />;
  </div>)
}


export default Table;