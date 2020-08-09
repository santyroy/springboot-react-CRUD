import React from "react";
import "./App.css";
import Employee from "./components/Employee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewEmployeeDetails from "./components/ViewEmployeeDetails";
// import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={Employee} />
            <Route path="/employees" exact component={Employee} />
            {/* step 1 */}
            <Route path="/addEmployee/:id" exact component={CreateEmployee} />
            {/* <Route
              path="/updateEmployee/:id"
              exact
              component={UpdateEmployee}
            /> */}
            <Route
              path="/viewEmployee/:id"
              exact
              component={ViewEmployeeDetails}
            />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
