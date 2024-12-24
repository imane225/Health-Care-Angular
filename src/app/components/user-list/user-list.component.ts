import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import nécessaire pour la navigation
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Liste des utilisateurs

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchDoctors(); // Récupération des utilisateurs au chargement
  }

  // Méthode pour récupérer uniquement les utilisateurs DOCTOR
  fetchDoctors(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data.filter((user) => user.role === 'DOCTOR');
    });
  }

  // Méthode pour naviguer vers les détails d'un utilisateur
  navigateToDetails(userId: number | undefined): void {
    if (userId) {
      this.router.navigate(['/user-details', userId]); // Redirige vers la route des détails utilisateur
    } else {
      console.error('ID utilisateur invalide');
    }
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.fetchDoctors();
      });
    }
  }
}
