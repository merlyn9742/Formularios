import { FormGroup } from "@angular/forms";

export class ControlForms {

    static getfieldForm(field: string, formGroup: FormGroup) {
        return formGroup.get(field);
    }

   static searchValidation(field: string, formGroup: FormGroup) {
        let fieldU = ControlForms.getfieldForm(field, formGroup);
        if(fieldU.hasError('required')) {
          return 'Campo Requerido';
        } else {
          switch (field) {
            case 'rfc':
              return fieldU.errors?.rfcInvalid ? 'RFC Invalido' : '';
              break;
            case 'dateBirth':
              return fieldU.errors?.younger ? 'Debe ser mayor de edad' : '';
              break;
            default:
              break;
          }
        }
      }
    
}