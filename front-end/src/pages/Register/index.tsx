import React, { FC, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import registerValidation from './validation';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './style';

const Register: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      registerValidation(data);
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Register</h1>

            <Input name="name" placeholder="Name" />
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" type="password" />

            <Button type="submit">Send</Button>

          </Form>

          <a href="/login">Already have an account?</a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default Register;
