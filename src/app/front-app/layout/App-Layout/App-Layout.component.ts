import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/Navbar/Navbar.component';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, NavbarComponent],
  template: `

    <app-navbar />
    <router-outlet />


  `,
  styleUrl: './App-Layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent { }
