package com.rahulkalefullstackproject.Employee_Management_System_backend.controller;

import com.rahulkalefullstackproject.Employee_Management_System_backend.dto.EmployeeDto;
import com.rahulkalefullstackproject.Employee_Management_System_backend.entity.Employee;
import com.rahulkalefullstackproject.Employee_Management_System_backend.services.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

  private EmployeeServices employeeServices;
  // Build Add Employee RestApi
  @PostMapping()
  public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
      EmployeeDto savedEmployee = employeeServices.createEmployee(employeeDto);
      return new ResponseEntity<>(savedEmployee , HttpStatus.CREATED);
  }
  //Build Get Employee RestApi
  @GetMapping("{id}")
  public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
      EmployeeDto employeeDto = employeeServices.getEmployeeById(employeeId);
      return ResponseEntity.ok(employeeDto);
  }

  // Build Get All Employees RestApi
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
      List<EmployeeDto> employees = employeeServices.getAllEmployees();
      return ResponseEntity.ok(employees);
    }

    // Update Employee RestApi
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId , @RequestBody EmployeeDto updateEmployee){
      EmployeeDto employeeDto = employeeServices.updateEmployee(employeeId , updateEmployee);
      return ResponseEntity.ok(employeeDto);

    }
    // Delete Employee RestApi
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
      employeeServices.deleteEmployee(employeeId);
      return ResponseEntity.ok("Employee Deleted Successfully🎊");
    }
}
