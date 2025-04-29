import { Component } from '@angular/core';
import { TicketListComponent } from '../../components/loggado/ticket-list/ticket-list.component';
import { CardsComponent } from '../../components/loggado/cards/cards.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    TicketListComponent, 
    CardsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
