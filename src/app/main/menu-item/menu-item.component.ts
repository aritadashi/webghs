import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../core/menu/menu-schema.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() items!: IMenuItem[];
  @ViewChild('childMenu', { static: true }) public childMenu: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
