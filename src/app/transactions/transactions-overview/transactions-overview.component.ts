import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TransactionsModel } from 'src/app/core/models';

@Component({
  selector: 'app-transactions-overview',
  templateUrl: './transactions-overview.component.html',
  styleUrls: ['./transactions-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsOverviewComponent {
  @Input()
  overview!: TransactionsModel.ITransactionOverview | null;
}
