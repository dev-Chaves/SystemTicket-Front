import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
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
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'Descrição do ticket 2',
      status: 'Aberto',
      createdAt: new Date()
    },
    {
      id:13123123,
      title: 'Ticket 1',
      description: 'Descrição do ticket 1',
      status: 'Aberto',
      createdAt: new Date()
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

}
