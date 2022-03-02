import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'user', component: UserComponent},
  {path: '', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
