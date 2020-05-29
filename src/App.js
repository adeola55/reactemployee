import React from 'react';
import Header from "./component/Header"
import Footer from "./component/Footer"
import Body from "./component/Body"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </div>
  );
}

export default App;
