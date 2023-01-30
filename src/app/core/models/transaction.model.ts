export interface ITransaction {
  date: string;
  logo: string;
  companyName: string;
  tags: string[];
  receipt: string;
  message: string;
  amount: number;
  cashback: number;
}

export interface ITransactionSearch {
  query?: string;
}

export interface ITransactionOverview {
  amount: number;
  count: number;
  cashback: number;
}

export type TransactionTableRow = [
  string,
  [string, string, string[]],
  [string, string],
  number
];

export type TransactionTableCol = {
  title: string;
  ratio: number;
};

// Move to const file
export enum ECellDataType {
  Date,
  Vendor,
  Attachment,
  Currency,
}

// Move to const file
export const transactionCellTypeMap = new Map<number, ECellDataType>([
  [0, ECellDataType.Date],
  [1, ECellDataType.Vendor],
  [2, ECellDataType.Attachment],
  [3, ECellDataType.Currency],
]);
