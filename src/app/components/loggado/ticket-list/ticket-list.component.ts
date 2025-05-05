import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService, Ticket } from '../../../services/ticket.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  showModal = false;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onTicketCreated(ticket: Ticket) {
    this.loadTickets(); // Reload tickets after creation
    this.closeModal();
  }
}
