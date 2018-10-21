import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menu = [
    { type: 'title', icon: ['fas', 'folder'], title: '장비관리' },
    { type: 'menu', icon: ['fas', 'angle-right'], title: '장비현황', router: ['/machinary/status'] },
    { type: 'menu', icon: ['fas', 'angle-right'], title: '장비관리', router: ['/machinary/manage'] },
    { type: 'menu', icon: ['fas', 'angle-right'], title: '부품현황', router: ['/machinary/component-status'] },
    { type: 'menu', icon: ['fas', 'angle-right'], title: 'A/S관리', router: ['/machinary/as-manage'] },
    { type: 'menu', icon: ['fas', 'angle-right'], title: '폐기장비', router: ['/machinary/discarded'] },
    { type: 'menu', icon: ['fas', 'angle-right'], title: '매각장비', router: ['/machinary/sold'] }
  ];
  constructor() {}

  ngOnInit() {}
}
