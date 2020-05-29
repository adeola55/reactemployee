import React from "react";
import axios from "axios";
import Table from "./Table";


class Body extends React.Component{
  state = {
    employeelist: []
  }
  componentDidMount = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then(response => {
      console.log(response)
      var employeeRecords = response.data.results
      var empData = [];
      for (let i = 0; i < employeeRecords.length; i++){
        let employee = {
          firstname: employeeRecords[i].name.first,
          lastname: employeeRecords[i].name.last,
          gender: employeeRecords[i].gender,
          email: employeeRecords[i].email,
          id: employeeRecords[i].id.value
        }
        empData.push(employee)
      }
      this.setState({employeelist: empData})
      console.log(this.state.employeelist)
    })
  }
render(){
  return (<div>
    <h1>
      Adeola's employee list
    </h1>
    <Table empRecords = {this.state.employeelist}/>
  </div>)
}
}

export default Body;