import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component'
import { ListComponent } from './pages/list/list.component'

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'add', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
