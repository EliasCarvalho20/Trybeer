import * as Yup from 'yup';

import { DataValidation } from '../interface';

const nameRegex = /^([a-zÀ-ÿ]\s*){3,}$/i;

export default (data: DataValidation): void => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegex, 'Name must be at least 3 characters long. No numbers and special characters')
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Enter a valid email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long'),
  });

  registerSchema.validateSync(data, {
    abortEarly: false,
  });
};
