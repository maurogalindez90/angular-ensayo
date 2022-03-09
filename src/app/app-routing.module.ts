import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandsTableComponent } from './components/bands-table/bands-table.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: BandsTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
