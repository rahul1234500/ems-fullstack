# Employee Management System (Full Stack)

A **Full Stack Employee Management System** built using **React.js** and **Spring Boot**, designed to perform complete **CRUD operations** with a clean UI and scalable backend architecture. This project demonstrates real-world frontend–backend integration following industry best practices.

---

## 🚀 Tech Stack

### Frontend

* React.js
* Bootstrap 5 (Responsive UI)
* Axios (HTTP client)
* HTML5, CSS3

### Backend

* Java
* Spring Boot
* Spring Data JPA
* RESTful APIs
* MySQL

### Tools

* Git & GitHub
* Postman
* VS Code / IntelliJ IDEA

---

## ✨ Features

* Add Employee
* Get All Employees
* Get Employee by ID
* Update Employee
* Delete Employee
* Responsive Card-style Form UI
* Modern Table Design for Employee Listing
* REST API-based communication

---

## 🖥️ Application Ports

| Service             | Port                    |
| ------------------- | ----------------------- |
| React Frontend      | `http://localhost:3000` |
| Spring Boot Backend | `http://localhost:8080` |

---

## 📂 Project Structure

### Backend (Spring Boot)

```
backend/
├── controller/
│   └── EmployeeController.java
├── service/
│   └── EmployeeService.java
├── repository/
│   └── EmployeeRepository.java
├── entity/
│   └── Employee.java
├── dto/
│   └── EmployeeDto.java
├── mapper/
│   └── EmployeeMapper.java
├── exception/
│   ├── ResourceNotFoundException.java
│   └── GlobalExceptionHandler.java
├── EmployeeManagementApplication.java
└── application.properties
```

---

### Frontend (React.js)

```
frontend/
├── src/
│   ├── assets/
│   │   └── styles/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ListEmployeeComponent.jsx
│   │   └── EmployeeComponent.jsx
│   ├── services/
│   │   └── EmployeeService.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🔗 API Endpoints

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | `/api/employees`      | Get all employees  |
| GET    | `/api/employees/{id}` | Get employee by ID |
| POST   | `/api/employees`      | Add new employee   |
| PUT    | `/api/employees/{id}` | Update employee    |
| DELETE | `/api/employees/{id}` | Delete employee    |

---

## ⚙️ How to Run the Project

### Backend

1. Open backend project in IntelliJ / Eclipse
2. Configure MySQL in `application.properties`
3. Run Spring Boot application

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
spring.datasource.username=root
spring.datasource.password=your_password
```

---

### Frontend

1. Navigate to the frontend folder
2. Install dependencies

```bash
npm install
npm run dev
```

---

## 📌 Key Highlights

* Clean MVC architecture
* DTO & Mapper pattern
* Global exception handling
* RESTful API design
* Axios-based API integration
* Responsive UI using Bootstrap 5

--- 
## 🖼️ Application Screenshots

<table>
  <tr>
    <td align="center">
      <b>Employee List (Dashboard)</b><br/>
      <img width="500px" height="500px" alt="Screenshot 2025-12-15 110321" src="https://github.com/user-attachments/assets/38fb42b9-f6eb-4fc3-a033-cc9ad9b71de1" />
    </td>
    <td align="center">
      <b>Add / Update Employee</b><br/>
      <img width="500px" height="500px" alt="Screenshot 2025-12-15 110658" src="https://github.com/user-attachments/assets/496100ab-7688-454c-97ae-7026faed11c5" />
    </td>
     <td align="center">
      <b>Add / Database photo</b><br/>
      <img width="600px" height="500px" alt="image" src="https://github.com/user-attachments/assets/86683dc0-a144-4f1a-bd6d-669be640ecc6" />
    </td>
  </tr>
</table>


## 📄 Resume Description

**Employee Management System | Java, Spring Boot, React.js**
Developed a full-stack web application implementing CRUD operations using Spring Boot REST APIs and React.js. Designed responsive UI with Bootstrap, integrated MySQL database, and followed clean code, MVC architecture, and Git-based version control.

---

## 👨‍💻 Author

**Rahul Kale**
GitHub: [https://github.com/rahulkaledev]([https://github.com/rahulkaledev](https://github.com/rahul1234500))

---

© 2025 All rights reserved
