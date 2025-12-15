package com.rahulkalefullstackproject.Employee_Management_System_backend.services;

import com.rahulkalefullstackproject.Employee_Management_System_backend.dto.EmployeeDto;
import com.rahulkalefullstackproject.Employee_Management_System_backend.entity.Employee;

import java.util.List;

public interface EmployeeServices {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeId ) ;

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId , EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);

}
