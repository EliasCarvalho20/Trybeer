import * as Yup from 'yup';

import { DataValidation } from '../interface';

export default (data: DataValidation): void => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Enter a valid email address'),
    password: Yup.string()
      .required('Password is required'),
  });

  loginSchema.validateSync(data, {
    abortEarly: false,
  });
};
