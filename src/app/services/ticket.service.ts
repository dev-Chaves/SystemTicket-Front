import { Injectable } from '@angular/core';

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

  constructor() { }
}
