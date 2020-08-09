import React from "react";
import { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((response) =>
      this.setState({ employee: response.data })
    );
  }

  render() {
    return (
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Employee Details Page</h3>
          <div className="card-body">
            <div className="row">
              <label>Name: </label>
              <span>
                {this.state.employee.firstName} {this.state.employee.lastName}
              </span>
            </div>
            <div className="row">
              <label>Email: </label>
              <span>{this.state.employee.email}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeDetails;
