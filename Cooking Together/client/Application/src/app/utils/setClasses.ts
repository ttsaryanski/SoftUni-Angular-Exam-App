export function setNameErrorClass(name: any): string {
  if (name?.touched && name?.errors?.['required']) {
    return 'border-error';
  }
  if (name?.touched && name?.errors?.['minlength']) {
    return 'border-error';
  }
  return '';
}

export function setEmailErrorClass(email: any): string {
  if (email?.touched && email?.errors?.['required']) {
    return 'border-error';
  }
  if (email?.touched && email?.errors?.['emailValidator']) {
    return 'border-error';
  }
  return '';
}

export function setImgErrorClass(email: any): string {
  if (email?.touched && email?.errors?.['required']) {
    return 'border-error';
  }
  if (email?.touched && email?.errors?.['imageUrlValidator']) {
    return 'border-error';
  }
  return '';
}

export function setRePassErrorClass(rePass: any): string {
  if (rePass?.touched && rePass?.errors?.['required']) {
    return 'border-error';
  }
  if (rePass?.touched && rePass?.errors?.['matchPassword']) {
    return 'border-error';
  }
  return '';
}

export function setButtonAttributes(form: any): {
  disabled: boolean;
  style: { [key: string]: string };
} {
  const isDisabled = form.invalid;
  const buttonStyle = {
    backgroundColor: isDisabled ? 'grey' : '',
  };

  return { disabled: isDisabled, style: buttonStyle };
}
