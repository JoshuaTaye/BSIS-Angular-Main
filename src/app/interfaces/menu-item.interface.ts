export interface MenuItem {
  icon?: string;
  text: string;
  link?: string;
  action?: () => void;
  isSeparator?: boolean;
}
