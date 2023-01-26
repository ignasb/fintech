import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from './link.type';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input()
  link!: Link;
}
