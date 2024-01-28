import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  
  @Output() filtervalue  = new EventEmitter<string>();


  onSearchChange (value: string) {
      this.filtervalue.emit(value);
  }

}
