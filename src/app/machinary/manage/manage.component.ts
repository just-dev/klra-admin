import { Component, OnInit } from '@angular/core';
import { Machinary } from '../../shared/models/machinary';
import { MachinaryService } from '../../shared/services';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  machinList: Machinary[] = [];
  isAddMode = false;
  constructor(private machinaryService: MachinaryService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.machinaryService.list().subscribe(res => {
      if (res.ok === 1) {
        this.machinList = res.data;
      }
    });
  }

  startAdd() {
    this.isAddMode = true;
  }

  onAddClose(event: string) {
    this.isAddMode = false;
    if (event === 'added') {
      this.load();
    }
  }

  expand(m: Machinary) {
    m.isExpanded = true;
  }

  fold(m: Machinary) {
    m.isExpanded = false;
  }
}
