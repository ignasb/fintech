import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Simple text validator for checking only letters in a string.
 */
export const lettersOnlyValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const lettersOnlyRegEx = /^[a-z]+$/i;
    const isLettersOnly = lettersOnlyRegEx.test(control.value);

    return isLettersOnly ? null : { lettersOnly: { value: control.value } };
  };
};

/**
 * Very simple email validator.
 */
export const emailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const simpleEmailRegEx = /^[\w.]+@[\w.]+\.[a-z]{2,3}$/i;
    const isEmailValid = simpleEmailRegEx.test(control.value);

    return isEmailValid ? null : { emailInvalid: { value: control.value } };
  };
};

/**
 * Simple uppercase validator.
 */
export const upperCaseValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const upperCaseRegEx = /[A-Z]+/;
    const isUpperCaseValid = upperCaseRegEx.test(control.value);

    return isUpperCaseValid
      ? null
      : { uppercaseRequired: { value: control.value } };
  };
};

/**
 * Simple digits validator.
 */
export const digitsValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const digitsRegEx = /\d+/;
    const isDigitsValid = digitsRegEx.test(control.value);

    return isDigitsValid ? null : { digitsRequired: { value: control.value } };
  };
};

/**
 * Matching passwords form validator.
 */
export const matchingPasswordsValidator = (): ValidatorFn => {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const password = formControl.get('password')?.value;
    const repeatPassword = formControl.get('repeatPassword')?.value;

    return password && repeatPassword && password === repeatPassword
      ? null
      : { notMatchingPasswords: { value: 'not matching' } };
  };
};
