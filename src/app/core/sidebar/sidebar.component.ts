import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './link/link.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  links: Link[] = [
    {
      title: 'Transactions',
      url: '/transactions',
      notifications: 4,
      icon: 'sync_alt',
    },
    { title: 'Cards', url: '/cards', notifications: 0, icon: 'credit_card' },
    { title: 'People', url: '/people', notifications: 0, icon: 'groups' },
    { title: 'Reports', url: '/reports', notifications: 6, icon: 'summarize' },
  ];
}
