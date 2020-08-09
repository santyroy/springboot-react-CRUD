import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id < 0) {
      // add call
      return;
    } else {
      // update call
      EmployeeService.getEmployeeById(this.state.id).then((response) => {
        let employee = response.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
        });
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    // step 5
    if (this.state.id < 0) {
      // add employee
      EmployeeService.addEmployees(employee).then((response) =>
        this.props.history.push("/employees")
      );
    } else {
      // update employee
      EmployeeService.updateEmployee(employee, this.state.id).then((response) =>
        this.props.history.push("/employees")
      );
    }
  };

  resetForm = (event) => {
    const { name } = event.target;
    this.setState({ [name]: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">
              {this.state.id < 0 ? "Add Employee" : "Update Employee"}
            </h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-warning"
                    type="reset"
                    onClick={() => this.props.history.push("/employees")}
                    style={{ marginLeft: 10 }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEmployee;
