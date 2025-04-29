import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/loggado/sidebar/sidebar.component';
import { CardsComponent } from '../../components/loggado/cards/cards.component';
import { TicketListComponent } from '../../components/loggado/ticket-list/ticket-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [SidebarComponent, CardsComponent, TicketListComponent, CardsComponent, SidebarComponent],
  standalone: true
})
export class DashboardComponent {

}
