import React, { FC, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import loginValidation from './validation';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './style';

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
      <Container>
        <Background />

        <Content>
          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Login</h1>
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

            <a href="a">Forget your password?</a>
          </Form>

          <a href="/register">Dont have an account yet?</a>
        </Content>
      </Container>
    </>
  );
};

export default Login;
