export interface IMenuItem {
  menuID: string;
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: IMenuItem[];
}
