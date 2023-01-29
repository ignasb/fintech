export const availableLinks: Link[] = [
  {
    title: 'Transactions',
    url: '/transactions',
    notifications: 4,
    icon: 'sync_alt',
  },
  { title: 'Cards', url: '/cards', notifications: 0, icon: 'credit_card' },
  { title: 'Reports', url: '/reports', notifications: 6, icon: 'summarize' },
  { title: 'People', url: '/people', notifications: 0, icon: 'groups' },
];

export const settingsLinks: Link[] = [
  { title: 'John Doe', url: '/settings/profile', notifications: 0, icon: '' },
  {
    title: 'Settings',
    url: '/settings/account',
    notifications: 0,
    icon: 'settings',
  },
];

export type Link = {
  url: string;
  title: string;
  notifications: number;
  icon: string;
};
