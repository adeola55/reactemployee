import React from "react";
function Header(){
  return (
    <nav className ="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" href="#">Navbar w/ text</a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">React employee directory <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <span className="navbar-text">
      Employee search using API
    </span>
  </div>
</nav>
  )
}
export default Header;