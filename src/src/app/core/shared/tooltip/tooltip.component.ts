import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() content?: string = '';
  @Input() name?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
