import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../../../services/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((tickets) => this.tickets = tickets);
  }
}
