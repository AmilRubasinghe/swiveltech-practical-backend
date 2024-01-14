const Controller = require("./controller");

const Service = require("./service");

const Routes = require("./routes");

const Employee = require("./employee");

module.exports = {
  EmployeeService: Service,

  EmployeeController: Controller,

  EmployeeRoutes: Routes,

  Employee: Employee,
};
