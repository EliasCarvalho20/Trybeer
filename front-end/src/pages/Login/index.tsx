import React, {
  FC, useRef, useCallback, useContext,
} from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import loginValidation from './validation';

import { TransitionContext } from '../../context/TransitionContext';

import { DataValidation } from './interface';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './style';
import logo from '../../assets/img/logo.png';

const Login: FC = () => {
  const { setPreset } = useContext(TransitionContext);
  const formRef = useRef<FormHandles>(null);

  const handlePageTransition = useCallback(() => {
    setTimeout(() => setPreset('fadeRightFadeLeft'), 1000);
  }, [setPreset]);

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
            <Link to="register" onClick={ handlePageTransition }>Sign Up</Link>
          </span>
        </Content>
      </Container>
    </>
  );
};

export default Login;
