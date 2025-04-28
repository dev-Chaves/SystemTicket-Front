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
  ]

  getTickets(): Observable<Ticket[]> {
    return of(this.tickets);
  }

  constructor() { }
}
