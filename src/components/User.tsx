import React from 'react';
import { Col, FormGroupProps } from 'react-bootstrap';
import { FormControlProps } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

interface Props
  extends Pick<FormControlProps, 'type' | 'placeholder' | 'value'>,
    Pick<React.HTMLAttributes<HTMLFormElement>, 'className'>,
    Pick<FormGroupProps, 'controlId' | 'as'> {
  label: string;
}

export const User: React.FC<Props> = ({
  label,
  type,
  placeholder,
  as,
  className,
  controlId,
  value,
}) => {
  return (
    <Form.Group className={className} controlId={controlId} as={as ? as : Col}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} value={value} />
    </Form.Group>
  );
};
