package com.healthhub.backend.service;

import com.healthhub.backend.dto.PatientDTO;
import com.healthhub.backend.entity.Patient;
import com.healthhub.backend.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientRepository repository;

    public Patient savePatient(PatientDTO dto) {
        Patient patient = new Patient();
        patient.setName(dto.getName());
        patient.setEmail(dto.getEmail());
        patient.setAge(dto.getAge());
        patient.setMedicalHistory(dto.getMedicalHistory());
        return repository.save(patient);
    }

    public List<Patient> getAllPatients() {
        return repository.findAll();
    }
}