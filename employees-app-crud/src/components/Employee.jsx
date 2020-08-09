import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employees: [],
    };
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  addEmployee = () => {
    this.props.history.push("/addEmployee/-1");
  };

  updateEmployee = (id) => {
    // this.props.history.push(`/updateEmployee/${id}`);
    this.props.history.push(`/addEmployee/${id}`);
  };

  deleteEmployee = (id) => {
    EmployeeService.deleteEmployeeById(id).then((response) =>
      // delete the above employee from the existing employees array
      this.setState({
        employees: this.state.employees.filter((e) => e.id !== id),
      })
    );
  };

  viewEmployee = (id) => {
    // create route to take to different component
    this.props.history.push(`/viewEmployee/${id}`);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th className="col-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.updateEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: 10 }}
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: 10 }}
                      className="btn btn-info"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;
