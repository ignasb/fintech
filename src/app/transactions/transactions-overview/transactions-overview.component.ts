import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transactions-overview',
  templateUrl: './transactions-overview.component.html',
  styleUrls: ['./transactions-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsOverviewComponent {

}
