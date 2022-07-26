import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, MenuItemComponent, LayoutComponent, SidenavComponent, SidenavItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainRoutingModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
