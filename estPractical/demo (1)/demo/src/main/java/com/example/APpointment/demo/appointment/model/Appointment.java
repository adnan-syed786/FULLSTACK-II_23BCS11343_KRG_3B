package com.example.Appointment.demo.appointment.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private String patientEmail;
    private String doctorName;

    private LocalDateTime appointmentDate;

    public Appointment() {}

    public Appointment(String patientName, String patientEmail, String doctorName, LocalDateTime appointmentDate) {
        this.patientName = patientName;
        this.patientEmail = patientEmail;
        this.doctorName = doctorName;
        this.appointmentDate = appointmentDate;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public String getPatientName() { return patientName; }
    public String getPatientEmail() { return patientEmail; }
    public String getDoctorName() { return doctorName; }
    public LocalDateTime getAppointmentDate() { return appointmentDate; }

    public void setId(Long id) { this.id = id; }
    public void setPatientName(String patientName) { this.patientName = patientName; }
    public void setPatientEmail(String patientEmail) { this.patientEmail = patientEmail; }
    public void setDoctorName(String doctorName) { this.doctorName = doctorName; }
    public void setAppointmentDate(LocalDateTime appointmentDate) { this.appointmentDate = appointmentDate; }
}