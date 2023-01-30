import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TransactionsModel } from 'src/app/core/models';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsDetailsComponent {
  @Input()
  tableRows!: TransactionsModel.TransactionTableRow[] | null;
}
