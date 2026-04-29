package com.example.Appointment.demo.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Appointment.demo.appointment.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}