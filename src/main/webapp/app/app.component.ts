import { Component } from '@angular/core';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@Component({
  selector: 'jhi-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent],
})
export class AppComponent {   // ✅ Export eklendi
  title = 'IQBSol';
}
