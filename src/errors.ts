import { customErrorFactory } from 'ts-custom-error';

export const LookupInvalid = customErrorFactory(function LookupInvalid(
  message = ''
) {
  this.message = message;
});
