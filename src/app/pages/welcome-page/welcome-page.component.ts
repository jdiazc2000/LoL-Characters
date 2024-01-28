import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  @Input() PageNum: number = 1;
  @Input() FilterValue!: string;

  Filter(event: string) {
    this.FilterValue = event;
  }
}
