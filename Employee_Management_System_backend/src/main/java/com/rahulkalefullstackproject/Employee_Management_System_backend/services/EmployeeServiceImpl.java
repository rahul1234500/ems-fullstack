package com.rahulkalefullstackproject.Employee_Management_System_backend.services;

import com.rahulkalefullstackproject.Employee_Management_System_backend.dto.EmployeeDto;
import com.rahulkalefullstackproject.Employee_Management_System_backend.entity.Employee;
import com.rahulkalefullstackproject.Employee_Management_System_backend.exception.ResourcesNotFoundException;
import com.rahulkalefullstackproject.Employee_Management_System_backend.mapper.EmployeeMapper;
import com.rahulkalefullstackproject.Employee_Management_System_backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeServices{
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeId) {
        Employee employee = employeeRepository.findById(employeId)
                .orElseThrow(()->
                        new ResourcesNotFoundException("Employee is not exists with this given id" + employeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map((employee)->EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override

    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourcesNotFoundException("Employee is not exists with given id " + employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourcesNotFoundException("Employee is not exists with given id " + employeeId));
        employeeRepository.deleteById(employeeId);
    }
}
