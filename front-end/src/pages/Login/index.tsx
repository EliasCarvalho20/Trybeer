import React, { FC, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import loginValidation from './validation';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      loginValidation(data);
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Form ref={ formRef } onSubmit={ handleSubmit }>
        <Input
          name="email"
          placeholder="Email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};

export default Login;
