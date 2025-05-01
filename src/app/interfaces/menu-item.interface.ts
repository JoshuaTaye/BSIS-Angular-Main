export interface MenuItem {
  icon?: string;
  text: string;
  route?: string;
  action?: () => void;
  isSeparator?: boolean;
}
