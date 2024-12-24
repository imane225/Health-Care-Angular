import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Composants Alert
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { AlertDetailComponent } from './components/alert-detail/alert-detail.component';
import { AlertCreateComponent } from './components/alert-create/alert-create.component';

// Composants User
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DoctorPatientsComponent } from './components/doctor-patients/doctor-patients.component';

const routes: Routes = [
  // Routes pour Alertes
  { path: 'alerts', component: AlertListComponent },
  { path: 'alerts/create', component: AlertCreateComponent },
  { path: 'alerts/:id', component: AlertDetailComponent },

  // Routes pour Utilisateurs
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'edit-user/:id', component: UserFormComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'doctor/:doctorId/patients', component: DoctorPatientsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  // Route par défaut
  { path: '', redirectTo: '/alerts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
