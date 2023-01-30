export enum ELinkType {
  Profile,
  Account,
  Default,
}

export const availableLinks: ILink[] = [
  {
    title: 'Transactions',
    url: '/transactions',
    notifications: 4,
    icon: 'sync_alt',
    linkType: ELinkType.Default,
  },
  {
    title: 'Cards',
    url: '/cards',
    notifications: 0,
    icon: 'credit_card',
    linkType: ELinkType.Default,
  },
  {
    title: 'Reports',
    url: '/reports',
    notifications: 6,
    icon: 'summarize',
    linkType: ELinkType.Default,
  },
  {
    title: 'People',
    url: '/people',
    notifications: 0,
    icon: 'groups',
    linkType: ELinkType.Default,
  },
];

export const settingsLinks: ILink[] = [
  {
    title: 'John Doe',
    url: '/settings/profile',
    notifications: 0,
    icon: '',
    photoUrl: '',
    linkType: ELinkType.Profile,
  },
  {
    title: 'Settings',
    url: '/settings/account',
    notifications: 0,
    icon: 'settings',
    linkType: ELinkType.Account,
  },
];

export interface ILink {
  url: string;
  title: string;
  notifications: number;
  icon: string;
  photoUrl?: string;
  linkType: ELinkType;
}
