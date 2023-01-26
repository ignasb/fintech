import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  @Input() user: any = {
    name: 'John Doe',
    photoUrl:
      'https://media.licdn.com/dms/image/C4D03AQHP2m3yZDYgdw/profile-displayphoto-shrink_200_200/0/1635143231418?e=1680134400&v=beta&t=mF0thXCU9YUAn2gP1un6yIr1uuCra2md-6QkhJt6vNI',
  };
}
