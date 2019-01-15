export const required = value =>
  value ? undefined : 'Value is required';

export const minLength = value =>
  value.length < 8
    ? 'Value must be at least 8 characters'
    : undefined;

export const validEmail = value => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(value)) {
    return undefined;
  }
  return 'Invalid email pattern';
};
