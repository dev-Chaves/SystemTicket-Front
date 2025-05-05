import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/loggado/sidebar/sidebar.component';
import { TicketListComponent } from '../../components/loggado/ticket-list/ticket-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [SidebarComponent, TicketListComponent],
  standalone: true
})
export class DashboardComponent {
}
