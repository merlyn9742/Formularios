import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { profileInterface } from '../models/formModel';
import { ValidatorsFormBuilder } from '../tools/validators';
import { ControlForms } from '../tools/controlForm';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.css']
})
export class ReactiveFormsExampleComponent implements OnInit {

  profileObj: profileInterface;

  profileForm = this.fb.group({
    name: ['', Validators.required],
    height: ['', Validators.required],
    dateBirth: ['', [Validators.required, ValidatorsFormBuilder.validAge]],
    rfc: ['',[Validators.required, ValidatorsFormBuilder.ValidRfcM]]
  });

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {}

  get getRfc() {
    return ControlForms.getfieldForm('rfc', this.profileForm);
  }

  getFormFieldUnique(field: string, formGroup: FormGroup) {
    return ControlForms.getfieldForm(field, formGroup);
  }

  searchValidation(field: string, formGroup: FormGroup) {
    return ControlForms.searchValidation(field, formGroup);
  }

  submit() {
    this.profileObj = this.profileForm.value;
    console.log(this.profileObj);
  }

}
