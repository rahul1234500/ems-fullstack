package com.rahulkalefullstackproject.Employee_Management_System_backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "employee_data")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @Column(name = "FIRST_NAME")
    private String firstName ;
    @Column(name = "LAST_NAME")
    private String lastName ;
    @Column(name = "EMAIL_ID" , nullable = false , unique = true)
    private String email ;
}
