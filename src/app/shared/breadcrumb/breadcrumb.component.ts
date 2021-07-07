import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() menu: Item[] = [];
  @Input() separator: string = '/';

  constructor() {}

  ngOnInit() {}


}