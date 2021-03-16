/* eslint-disable prettier/prettier */
import { registerDecorator } from 'class-validator';

const isRegexValid = () => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isRegexValid',
      target: object.constructor,
      propertyName,
      options: {
        message: 'The name must have at least 12 characters and must contain only letters and spaces'
      },
      validator: {
        validate(value: any) {
          return (/([A-Z]\s*){12,}/gi).test(value);
        },
      },
    });
  };
}

export default isRegexValid
