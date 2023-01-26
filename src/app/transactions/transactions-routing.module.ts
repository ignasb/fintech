import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsShellComponent } from './transactions-shell/transactions-shell.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
