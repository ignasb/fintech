import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TransactionsModel } from 'src/app/core/models';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  @Input()
  tableRows!: TransactionsModel.TransactionTableRow[] | null;

  cellTypeMap = TransactionsModel.transactionCellTypeMap;
  ECellType = TransactionsModel.ECellDataType;

  tableColumns: TransactionsModel.TransactionTableCol[] = [
    { title: 'Date', ratio: 1 },
    { title: 'Vendor', ratio: 3 },
    { title: 'Attachment', ratio: 1 },
    { title: 'Amount', ratio: 1 },
  ];
}
