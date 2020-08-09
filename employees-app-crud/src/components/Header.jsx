import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Employee Management App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addEmployee/-1">
                  Add Employee
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/employees">
                  View Employee
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
