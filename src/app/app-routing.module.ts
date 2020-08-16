import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'reactiveForms', loadChildren: () => import('./reactive-forms-example/reactive-forms-example.module').then(m => m.ReactiveFormsExampleModule) },
  { path: '', redirectTo: 'reactiveForms', pathMatch: 'full' },
  { path: '**', redirectTo: 'reactiveForms', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
