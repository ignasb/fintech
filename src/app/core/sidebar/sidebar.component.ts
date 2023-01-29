import { ChangeDetectionStrategy, Component } from '@angular/core';
import { availableLinks, Link, settingsLinks } from './sidebar.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  links: Link[] = availableLinks;
  settings: Link[] = settingsLinks;
}
