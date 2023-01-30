import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ELinkType, ILink } from '../sidebar.const';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input()
  link!: ILink;

  linkType = ELinkType;
}
