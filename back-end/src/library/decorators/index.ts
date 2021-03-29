/* eslint-disable prettier/prettier */
import { registerDecorator } from 'class-validator';

const isRegexValid = () => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isRegexValid',
      target: object.constructor,
      propertyName,
      options: {
        message: 'Name must be at least 12 characters long'
      },
      validator: {
        validate(value: any) {
          return (/^([a-zÀ-ÿ]\s*){12,}$/i).test(value);
        },
      },
    });
  };
}

export default isRegexValid
