import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsExampleRoutingModule } from './reactive-forms-example-routing.module';
import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ReactiveFormsExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsExampleRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ReactiveFormsExampleModule { }
