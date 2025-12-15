package com.rahulkalefullstackproject.Employee_Management_System_backend.repository;

import com.rahulkalefullstackproject.Employee_Management_System_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
