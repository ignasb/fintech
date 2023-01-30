import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserModel } from '../../models';

@Component({
  selector: 'app-profile-settings-overview',
  templateUrl: './profile-settings-overview.component.html',
  styleUrls: ['./profile-settings-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSettingsOverviewComponent implements OnChanges {
  @Input()
  user!: UserModel.IUser | null;

  joinedDate: Date | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    const { user } = changes;

    if (user.currentValue) {
      this.joinedDate = new Date(user.currentValue.joinedDate);
    }
  }
}
