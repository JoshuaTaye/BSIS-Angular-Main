import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { AlertsComponent } from "./components/alerts/alerts.component";
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AlertsComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BSIS-Frontend';
  headerTitle: string = "HOME";
  rightMenu: string = "Donor Clinic";
}
