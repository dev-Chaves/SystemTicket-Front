import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Output() filterChange = new EventEmitter<{ type: string, value: string }>();

  filterByStatus(status: string) {
    this.filterChange.emit({ type: 'status', value: status });
  }

  filterByPriority(priority: string) {
    this.filterChange.emit({ type: 'priority', value: priority });
  }
}
