export type TransactionTableRow = [
  string,
  [string, string, string[]],
  [string, string],
  string
];

export type TransactionTableCol = {
  title: string;
  ratio: number;
};

export enum ECellDataType {
  Date,
  Vendor,
  Attachment,
  Currency,
}

export const transactionCellTypeMap = new Map<number, ECellDataType>([
  [0, ECellDataType.Date],
  [1, ECellDataType.Vendor],
  [2, ECellDataType.Attachment],
  [3, ECellDataType.Currency],
]);
