import { Component } from '@angular/core';
import { TicketListComponent } from '../../components/loggado/ticket-list/ticket-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [TicketListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
