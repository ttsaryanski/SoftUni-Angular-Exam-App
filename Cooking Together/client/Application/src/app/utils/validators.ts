// import { ValidatorFn } from '@angular/forms';

// export function emailValidator(): ValidatorFn {
//   const regExp = new RegExp(
//     `^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$`
//   );

//   return (control) => {
//     const isInValid = control.value === '' || regExp.test(control.value);

//     return isInValid ? null : { emailValidator: true };
//   };
// }

// export function matchPasswordValidator(
//   passwordControl: string,
//   rePasswordControl: string
// ): ValidatorFn {
//   return (control) => {
//     const password = control.get(passwordControl)?.value;
//     const rePassword = control.get(rePasswordControl)?.value;

//     const areMatch = password === rePassword;

//     return areMatch ? null : { matchPasswordValidator: true };
//   };
// }
