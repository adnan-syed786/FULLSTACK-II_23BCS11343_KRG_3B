package com.example.Appointment.demo.appointment.controller;

import com.example.Appointment.demo.appointment.model.Appointment;
import com.example.Appointment.demo.appointment.service.AppointmentService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    // DTO
    public static class CreateAppointmentRequest {
        public String patientName;
        public String patientEmail;
        public String doctorName;

        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
        public LocalDateTime appointmentDate;
    }

    @PostMapping
    public ResponseEntity<Appointment> create(@RequestBody CreateAppointmentRequest req) {

        if (req.patientEmail == null || req.patientEmail.isBlank()) {
            return ResponseEntity.badRequest().build();
        }

        Appointment a = new Appointment(
                req.patientName,
                req.patientEmail,
                req.doctorName,
                req.appointmentDate
        );

        Appointment saved = service.createAndNotify(a);

        return ResponseEntity.ok(saved);
    }
}