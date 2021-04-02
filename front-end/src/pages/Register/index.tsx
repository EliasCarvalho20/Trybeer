import React, { FC, useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErrors';
import registerValidation from './validation';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './style';
import logo from '../../assets/img/logo.png';

const Register: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleInputChange = useCallback(({ target: { id } }) => {
    formRef.current?.setFieldError(id, '');
  }, []);

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
          <img src={ logo } alt="Logo" />

          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Register</h1>

            <Input
              id="name"
              name="name"
              placeholder="Name"
              icon={ FiUser }
              onChange={ handleInputChange }
            />
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

            <Button type="submit">Send</Button>
          </Form>

          <span>
            <FiArrowLeft />
            Already have an account?
            <a href="/login">Login</a>
          </span>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default Register;
