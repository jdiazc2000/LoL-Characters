import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{
  @Output() filtervalue  = new EventEmitter<string>() ;

  ngOnInit(): void {
    console.log(this.filtervalue.length)
  }

  onSearchChange (value: string) {
      this.filtervalue.emit(value);
  }

}
