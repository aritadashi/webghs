import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenuItem } from '../core/menu/menu-schema.interface';
import { MenuSchemaService } from '../core/menu/menu-schema.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  menuItems: IMenuItem[];

  constructor(private menuSchemaService: MenuSchemaService) {
    this.menuItems = this.menuSchemaService.getMenuItems();
  }

  ngOnInit(): void {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
