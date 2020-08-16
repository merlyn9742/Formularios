import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';

const routes: Routes = [{ path: '', component: ReactiveFormsExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsExampleRoutingModule { }
