import React from "react";
import axios from "axios"


class Body extends React.Component{
  state = {
    employeelist: []
  }
  componentDidMount = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then(response => {
      console.log(response)
    })
  }
render(){
  return (<div>
    <h1>
      Adeola's employee list
    </h1>
  </div>)
}
}

export default Body;