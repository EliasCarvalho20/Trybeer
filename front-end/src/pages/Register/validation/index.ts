import * as Yup from 'yup';

import { DataValidation } from '../interface';

const nameRegex = /^([a-zÀ-ÿ]\s*){3,}$/i;

export default (data: DataValidation): void => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(nameRegex, 'Name must be at least 3 long, no numbers and special characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Enter a valid email address'),
    password: Yup.string()
      .required('Password is required'),
  });

  registerSchema.validateSync(data, {
    abortEarly: false,
  });
};
