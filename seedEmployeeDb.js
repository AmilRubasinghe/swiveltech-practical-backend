const mongoose = require("mongoose");

const connection = require("./config/database");

mongoose.connection = connection;

const EmployeeSchema = require("./src/modules/employee-management/employee");

const EmployeeJson = require("./employees.json");

// Import Sample Data In DB
const importData = async () => {
  try {
    await EmployeeSchema.create(EmployeeJson);
    console.log(`Data successfully imported`);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete the data from DB
const deleteData = async () => {
  try {
    await EmployeeSchema.deleteMany();
    console.log(`Data successfully deleted`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData().then();
} else if (process.argv[2] === "-d") {
  deleteData().then();
}
