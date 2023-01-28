import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ECellDataType,
  transactionCellTypeMap,
  TransactionTableCol,
  TransactionTableRow,
} from '../transactions.const';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent {
  cellTypeMap = transactionCellTypeMap;
  ECellType = ECellDataType;

  tableColumns: TransactionTableCol[] = [
    { title: 'Date', ratio: 1 },
    { title: 'Vendor', ratio: 3 },
    { title: 'Attachment', ratio: 1 },
    { title: 'Amount', ratio: 1 },
  ];

  tableRows: TransactionTableRow[] = [
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
    [
      '2023-01-01T12:40:00Z',
      ['/assets/apple.png', 'Apple Store', ['Electronics', 'Consumer']],
      ['12345', 'Sample notes text'],
      '3456',
    ],
  ];
}
