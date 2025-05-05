import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../services/ticket.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() ticketCreated = new EventEmitter<Ticket>();
  
  ticket: Partial<Ticket> = {
    title: '',
    description: '',
    status: 'Aberto'
  };

  constructor(private ticketService: TicketService) {}

  onSubmit() {
    const newTicket: Ticket = {
      ...this.ticket as Ticket,
      id: Math.floor(Math.random() * 1000000),
      createdAt: new Date()
    };
    
    this.ticketService.createTicket(newTicket).subscribe({
      next: (createdTicket) => {
        this.ticketCreated.emit(createdTicket);
        this.closeModal.emit();
      },
      error: (error) => {
        console.error('Error creating ticket:', error);
        // TODO: Add error handling UI
      }
    });
  }

  onClose() {
    this.closeModal.emit();
  }
}
