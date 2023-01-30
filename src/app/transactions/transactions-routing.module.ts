import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsGuardService } from './transactions-guard.service';
import { TransactionsShellComponent } from './transactions-shell/transactions-shell.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsShellComponent,
    canActivate: [TransactionsGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [TransactionsGuardService],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
