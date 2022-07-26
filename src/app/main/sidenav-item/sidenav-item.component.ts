import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenuItem } from '../core/menu/menu-schema.interface';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  @Output() sidenavItemClose = new EventEmitter();

  @Input() children!: IMenuItem[];
  @Input() item!: IMenuItem;

  constructor() {}

  ngOnInit(): void {}

  public onSidenavItemClose = () => {
    this.sidenavItemClose.emit();
  };
}
