import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Composants principaux
import { AppComponent } from './app.component';

// Modules de routage
import { AppRoutingModule } from './app-routing.module';

// Composants Alertes
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { AlertDetailComponent } from './components/alert-detail/alert-detail.component';
import { AlertCreateComponent } from './components/alert-create/alert-create.component';

// Composants Utilisateurs
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// Composant supplémentaire si nécessaire
import { DoctorPatientsComponent } from './components/doctor-patients/doctor-patients.component';

// Modules communs (obligatoire pour *ngFor, *ngIf, etc.)
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AlertListComponent,
    AlertDetailComponent,
    AlertCreateComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    DoctorPatientsComponent, // Ajout du composant manquant
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Module pour les requêtes HTTP
    CommonModule, // Important pour *ngFor et *ngIf
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
