import { FormControl } from '@angular/forms';

export class ValidatorsFormBuilder {


    static ValidRfcM(rfc: FormControl): { [key: string]: boolean } {
        const regex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/g;
    
        if (!regex.test(rfc.value)) {
          return {
            rfcInvalid: true,
          };
        }
        return null;
      }

      static validAge(fecha: FormControl): { [key: string]: boolean} {

        const convertAge = new Date(fecha.value);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());

        let edad = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        if ( edad < 18) {
            return {
              younger: true
            };
        }
        return null;
    }
}