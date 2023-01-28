import { CurrencyPipe, DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ECellDataType } from '../transactions.const';

@Pipe({
  name: 'formatTransactionCell',
})
export class FormatTransactionCellPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe, private datePipe: DatePipe) {}

  transform(cell: string | object, index: number): string {
    return cell.toString();
  }

  // private transformCellByIndex(cell: string | object, index: number): string | null {
  //   const type = this.transactionCellTypeMap.get(index);

  //   switch (type) {
  //     case ECellDataType.Date:
  //       return this.datePipe.transform(<string>cell);
  //     case ECellDataType.
  //     default:
  //       return cell.toString();
  //   }
  // }
}
