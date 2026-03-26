import { Component } from '@angular/core';
import { RoleBasedAccess } from "../role-based-access";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navigation',
  imports: [RoleBasedAccess, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
