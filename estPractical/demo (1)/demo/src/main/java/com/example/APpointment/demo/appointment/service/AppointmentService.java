package com.example.Appointment.demo.appointment.service;

import com.example.Appointment.demo.appointment.model.Appointment;
import com.example.Appointment.demo.appointment.repository.AppointmentRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;
    private final JavaMailSender mailSender;

    public AppointmentService(AppointmentRepository repository, JavaMailSender mailSender) {
        this.repository = repository;
        this.mailSender = mailSender;
    }

    public Appointment createAndNotify(Appointment appointment) {

        // Save to DB
        Appointment saved = repository.save(appointment);

        // Send Email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(saved.getPatientEmail());
        message.setSubject("Appointment Confirmation");

        message.setText(
                "Hello " + saved.getPatientName() + ",\n\n" +
                        "Your appointment is confirmed.\n" +
                        "Doctor: " + saved.getDoctorName() + "\n" +
                        "Date: " + saved.getAppointmentDate()
        );

        message.setFrom("your_email@gmail.com");

        mailSender.send(message);

        return saved;
    }
}