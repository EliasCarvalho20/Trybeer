import React, { FC, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './style';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        defaultValue={ defaultValue }
        ref={ inputRef }
        { ...rest }
      />
    </Container>
  );
};

export default Input;
