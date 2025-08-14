import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/Navbar/Navbar.component';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './Home-page.component.html',
  styleUrl: './Home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
