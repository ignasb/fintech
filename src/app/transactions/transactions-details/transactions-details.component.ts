import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsDetailsComponent {

}
