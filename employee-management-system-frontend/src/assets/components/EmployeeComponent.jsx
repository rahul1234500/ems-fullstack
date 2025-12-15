import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../../services/EmployeeServices";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate(); // renamed for clarity
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          // axios returns data on response.data
          const emp = response?.data;
          setFirstName(emp?.firstName ?? "");
          setLastName(emp?.lastName ?? "");
          setEmail(emp?.email ?? "");
        })
        .catch((error) => {
          console.error("Failed to fetch employee:", error);
        });
    }
  }, [id]);

  // Use as form submit handler — will receive event 'e'
  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log("Saving employee:", employee);

    if (!validateForm()) return;

    if (id) {
      updateEmployee(id, employee)
        .then((response) => {
          console.log("Updated:", response.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.error("Update error:", error);
          // show user-friendly message or set state to display error
        });
    } else {
      createEmployee(employee)
        .then((response) => {
          // axios: data is in response.data
          console.log("Created:", response.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.error("Create error:", error);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email id is required";
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    return id ? (
      <h2 className="text-center mb-4 mt-5">Update Employee</h2>
    ) : (
      <h2 className="text-center mb-4">Add Employee</h2>
    );
  }

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div
        className="card shadow-lg border-0 rounded-3"
        style={{ width: "450px" }}
      >
        {pageTitle()}
        <div className="card-body p-4">
          {/* Attach handler to form onSubmit */}
          <form onSubmit={saveOrUpdateEmployee} noValidate>
            {/* FIRST NAME */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Employee First Name
              </label>
              <input
                type="text"
                placeholder="Enter Employee First Name"
                name="firstName"
                value={firstName}
                className={`form-control form-control-lg rounded-3 shadow-sm ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>

            {/* LAST NAME */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Employee Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Employee Last Name"
                name="lastName"
                value={lastName}
                className={`form-control form-control-lg rounded-3 shadow-sm ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Employee Email ID
              </label>
              <input
                type="email"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                className={`form-control form-control-lg rounded-3 shadow-sm ${
                  errors.email ? "is-invalid" : ""
                }`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit" // important: so form submit triggers onSubmit
              className="btn btn-success w-100 rounded-3 py-2 fw-semibold"
            >
              
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
