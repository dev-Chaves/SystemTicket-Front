import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type TicketStatus = 'Aberto' | 'Em Progresso' | 'Fechado';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date;
  closingComment?: string;
}

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private apiUrl = "http://localhost:8080/api/tickets";

  constructor(private http: HttpClient) {}

  private tickets: Ticket[] = [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'Descrição do ticket 1',
      status: 'Aberto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'Descrição do ticket 2',
      status: 'Em Progresso',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:13123123,
      title: 'Ticket 1',
      description: 'Descrição do ticket 1',
      status: 'Aberto',
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ]

  getTickets(): Observable<Ticket[]> {
    return of(this.tickets);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    // For now, we'll just add to the local array since the backend isn't set up
    this.tickets.push(ticket);
    return of(ticket);
    
    // When backend is ready, uncomment this:
    // return this.http.post<Ticket>(this.apiUrl, ticket);
  }

  updateTicketStatus(ticketId: number, newStatus: TicketStatus): Observable<Ticket> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = newStatus;
      ticket.updatedAt = new Date();
      if (newStatus === 'Fechado') {
        ticket.closedAt = new Date();
      }
    }
    return of(ticket!);
  }
  
  closeTicket(ticketId: number, comment: string): Observable<Ticket> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = 'Fechado';
      ticket.closedAt = new Date();
      ticket.closingComment = comment;
    }
    return of(ticket!);
  }

}
