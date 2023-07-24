import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
    displaying:true,
    role:"user"
  },
  {
    displayName: 'Contacts manager',
    iconName: 'icon-contact',
    route: '/contacts',
    displaying:true,
    role:"admin"
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'rosette',
    route: '/ui-components/badge',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Chips',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
    displaying:true,
    role:"admin"
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
    displaying:true,
    role:"admin"
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
    displaying:true,
    role:"admin"
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
    displaying:true,
    role:"admin"
  },
];
