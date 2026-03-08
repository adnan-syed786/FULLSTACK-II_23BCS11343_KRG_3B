package com.healthhub.backend.controller;

import com.healthhub.backend.dto.PatientDTO;
import com.healthhub.backend.entity.Patient;
import com.healthhub.backend.service.PatientService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@RequiredArgsConstructor
public class PatientController {

    private final PatientService service;

    // POST: http://localhost:8080/api/patients
    @PostMapping
    public ResponseEntity<Patient> create(@Valid @RequestBody PatientDTO dto) {
        return new ResponseEntity<>(service.savePatient(dto), HttpStatus.CREATED);
    }

    // GET: http://localhost:8080/api/patients
    @GetMapping
    public List<Patient> getAll() {
        return service.getAllPatients();
    }
}