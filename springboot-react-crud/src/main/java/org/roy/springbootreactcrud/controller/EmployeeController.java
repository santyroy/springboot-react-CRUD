package org.roy.springbootreactcrud.controller;

import org.roy.springbootreactcrud.exception.ResourceNotFoundException;
import org.roy.springbootreactcrud.model.Employee;
import org.roy.springbootreactcrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // create an employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id : " + id + " not found"));
        return ResponseEntity.ok(employee);
    }

    // update employee by id
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee emp, @PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id : " + id + " not found"));
        if (employee != null) {
            employee.setFirstName(emp.getFirstName());
            employee.setLastName(emp.getLastName());
            employee.setEmail(emp.getEmail());
            Employee updateEmployee = employeeRepository.save(employee);
            return ResponseEntity.ok(updateEmployee);
        }
        return ResponseEntity.notFound().build();
    }

    // delete employee by id
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable("id") Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id : " + id + " not found"));

        if(employee != null) {
            employeeRepository.deleteById(id);
        }
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
