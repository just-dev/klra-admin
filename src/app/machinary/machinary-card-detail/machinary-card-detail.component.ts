import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Machinary } from '../../shared/models/machinary';

@Component({
  selector: 'app-machinary-card-detail',
  templateUrl: './machinary-card-detail.component.html',
  styleUrls: ['./machinary-card-detail.component.scss']
})
export class MachinaryCardDetailComponent implements OnInit {
  @Output()
  close: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  machinary: Machinary;
  constructor() {}

  ngOnInit() {}

  fold() {
    this.close.emit('fold');
  }
}
