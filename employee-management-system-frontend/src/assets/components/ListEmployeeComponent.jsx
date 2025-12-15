import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../../services/EmployeeServices";
import { useNavigate } from "react-router-dom";
const ListEmployeeComponent = () => {
  // dummy data for component testing
  // const dummyData = [
  //     { id: 1, firstName: "Rahul", lastName: "Kale", email: "rahulkale@gmail.com" },
  //     { id: 2, firstName: "Prakshi", lastName: "Nagmote", email: "prakshinagmote@gmail.com" },
  //     { id: 3, firstName: "Himanshu", lastName: "Bele", email: "himanshubele@gmail.com" },
  //     { id: 4, firstName: "Manva", lastName: "Thakre", email: "manvathakre@gmail.com" },
  //     { id: 5, firstName: "Rohit", lastName: "Gupta", email: "rohitgupta@gmail.com" }
  // ];
  const navigator = useNavigate();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // Modern Bootstrap row color classes
  const rowColors = [
    "table-primary",
    "table-warning",
    "table-success",
    "table-info",
    "table-light",
  ];
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployee();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="container mt-4">
      <h2 className="text-center text-decoration-underline mb-4">
        List Of Employees
      </h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-hover table-bordered align-middle ">
        <thead className="table-dark">
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className={rowColors[index % rowColors.length]}
            >
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                {employee.email}
                {/* You can add badge here if needed */}
              </td>
              <td>
                {/* // update */}
                <button
                  className="btn btn-info"
                  onClick={() => {
                    updateEmployee(employee.id);
                  }}
                >
                  Update
                </button>
                {/* //Delete */}
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginLeft: "-30px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
