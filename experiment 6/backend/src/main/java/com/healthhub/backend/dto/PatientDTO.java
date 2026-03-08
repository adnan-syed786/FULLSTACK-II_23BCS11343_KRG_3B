package com.healthhub.backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class PatientDTO {
    @NotBlank(message = "Name cannot be empty")
    private String name;

    @Email(message = "Please provide a valid email address")
    private String email;

    @Min(value = 0, message = "Age must be a positive number")
    @Max(value = 120, message = "Please enter a valid age")
    private Integer age;

    private String medicalHistory;
}