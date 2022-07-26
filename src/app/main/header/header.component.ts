import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';
import { MenuSchemaService } from '../core/menu/menu-schema.service';
import { IMenuItem } from '../core/menu/menu-schema.interface';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../core/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  user$: Observable<User>;

  menuItems: IMenuItem[];

  // @HostBinding('class') themeClass = '';

  // toggleControl = new FormControl(false);
  isDarkMode: boolean;

  constructor(
    private userService: UserService,
    private menuSchemaService: MenuSchemaService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.user$ = userService.getUser();
    this.menuItems = this.menuSchemaService.getMenuItems();

    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.menuItems = this.menuSchemaService.getMenuItems();

    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.themeClass = darkMode ? darkClassName : '';
    //   if (darkMode) {
    //     this.overlay.getContainerElement().classList.add(darkClassName);
    //   } else {
    //     this.overlay.getContainerElement().classList.remove(darkClassName);
    //   }
    // });
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
