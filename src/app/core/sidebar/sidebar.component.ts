import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/store/reducers';
import { UserSelectors } from 'src/app/store/selectors/user.selectors';
import { UserModel } from '../../shared/models';
import {
  availableLinks,
  ELinkType,
  ILink,
  settingsLinks,
} from './sidebar.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnDestroy {
  links: ILink[] = availableLinks;
  settings: ILink[] = settingsLinks;

  subscriptions = new Subscription();

  constructor(private userSelectors: UserSelectors) {}

  ngOnInit() {
    const sub = this.userSelectors.getUser$.subscribe((user) => {
      this.settings = this.getSettingsLinks(user);
    });

    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getSettingsLinks(user: UserModel.IUser): ILink[] {
    return settingsLinks.map((link: ILink) => {
      if (link.linkType === ELinkType.Profile) {
        return {
          ...link,
          photoUrl: user.photoUrl,
          title: `${user.firstName}  ${user.lastName}`,
        };
      }

      return link;
    });
  }
}
