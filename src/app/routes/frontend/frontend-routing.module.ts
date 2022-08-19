import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from 'src/app/core/frontend/frontend.component';
import { HomeComponent } from 'src/app/features/pages/fd/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }