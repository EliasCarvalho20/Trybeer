import React, { FC, useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import loginValidation from './validation';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './style';
import logo from '../../assets/img/logo.png';

const Login: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleInputChange = useCallback(({ target: { id } }) => {
    formRef.current?.setFieldError(id, '');
  }, []);

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
        <Content>
          <img src={ logo } alt="Logo" />

          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Login</h1>

            <Input
              id="email"
              name="email"
              placeholder="Email"
              icon={ FiMail }
              onChange={ handleInputChange }
            />
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              icon={ FiLock }
              onChange={ handleInputChange }
            />
            <a href="a">Forget your password?</a>

            <Button type="submit">Login</Button>
          </Form>

          <span>
            <FiLogIn />
            Don&apos;t have an account yet?
            <a href="/register">Sign Up</a>
          </span>
        </Content>
      </Container>
    </>
  );
};

export default Login;
