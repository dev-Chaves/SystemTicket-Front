import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket, TicketStatus } from '../../../services/ticket.service';
import { ModalComponent } from '../modal/modal.component';
import { CloseTicketModalComponent } from '../close-ticket-modal/close-ticket-modal.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, CloseTicketModalComponent],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  showModal = false;
  showCloseModal = false;
  selectedTicketId?: number;
  searchTerm: string = '';
  statusOptions: TicketStatus[] = ['Aberto', 'Em Progresso', 'Fechado'];
  showNotification = false;
  notificationMessage = '';

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
      this.filterTickets();
    });
  }

  filterTickets() {
    if (!this.searchTerm) {
      this.filteredTickets = this.tickets;
    } else {
      this.filteredTickets = this.tickets.filter(ticket =>
        ticket.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openCloseModal(ticketId: number) {
    this.selectedTicketId = ticketId;
    this.showCloseModal = true;
  }

  closeCloseModal() {
    this.showCloseModal = false;
    this.selectedTicketId = undefined;
  }

  onTicketCreated(ticket: Ticket) {
    this.loadTickets();
    this.closeModal();
    this.showSuccessNotification('Ticket criado com sucesso!');
  }

  onStatusChange(ticketId: number, newStatus: TicketStatus) {
    this.ticketService.updateTicketStatus(ticketId, newStatus).subscribe({
      next: () => {
        this.loadTickets();
        this.showSuccessNotification('Status atualizado com sucesso!');
      },
      error: (error) => {
        console.error('Error updating status:', error);
        this.showSuccessNotification('Erro ao atualizar status', true);
      }
    });
  }

  onCloseTicket(comment: string) {
    if (this.selectedTicketId) {
      this.ticketService.closeTicket(this.selectedTicketId, comment).subscribe({
        next: () => {
          this.loadTickets();
          this.closeCloseModal();
          this.showSuccessNotification('Ticket fechado com sucesso!');
        },
        error: (error) => {
          console.error('Error closing ticket:', error);
          this.showSuccessNotification('Erro ao fechar ticket', true);
        }
      });
    }
  }

  private showSuccessNotification(message: string, isError: boolean = false) {
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
