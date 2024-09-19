import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  validatorPattern = {
    regexes: {
        name: "^[a-za-яєіїёA-ZА-ЯЄІЇЁ \\-]{1,25}$",
        surname: "^[a-za-яєіїёA-ZА-ЯЄІЇЁ]{1,25}$",
        fullName: "^[A-Za-zА-ЯЄІЇЁа-яєіїё -]{2,256}$",
        email: "\\b[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\\b",
        phone: "^\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\\d{0,14}$",
        comment: "^(.|\\n*\\r*){0,1000}$",
    },
    validationMessages: {
        name: "Не вірний формат ім'я",
        surname: "Не вірний формат",
        fullName: "Не вірний формат",
        required: "Поле обо'язкове для заповнення",
        minLength: "Мінімальна кількість символів",
        maxLength: "Перевищено ліміт допустимої кількості символів",
        email: "Не вірний формат email",
        phone: "Не вірний формат телефону",
        comment: "Не допустимий коментар",
    }
  }

  constructor() { }

  validateControl(form: FormGroup, control: string): boolean {
    return form.controls[control].invalid && form.controls[control].dirty;
  }

  setRegex(regex: string): string {
    return this.validatorPattern.regexes[regex as keyof typeof this.validatorPattern.regexes];
  }

  setErrorMessage(message: string): string {
    return this.validatorPattern.validationMessages[message as keyof typeof this.validatorPattern.validationMessages];
  }

}
