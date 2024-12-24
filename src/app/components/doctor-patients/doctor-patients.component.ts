import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PatientResponse } from '../../models/patient-response.model';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css'],
})
export class DoctorPatientsComponent implements OnInit {
  patients: PatientResponse[] = [];
  doctorId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer doctorId depuis l'URL
    this.doctorId = +this.route.snapshot.paramMap.get('doctorId')!;
    this.loadPatients();
  }

  loadPatients(): void {
    this.userService.getPatientsByDoctor(this.doctorId).subscribe({
      next: (data) => (this.patients = data),
      error: (err) => console.error('Erreur lors du chargement des patients', err),
    });
  }
}
