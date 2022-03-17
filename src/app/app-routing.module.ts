import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsTableComponent } from './components/bands-table/bands-table.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  { path: '', component: BandsTableComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }