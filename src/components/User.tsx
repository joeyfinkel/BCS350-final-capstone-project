import React from 'react';
import { Col, FormGroupProps } from 'react-bootstrap';
import { FormControlProps } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ShowComponentWithDuration } from './ShowComponentWithDuration';

export interface UserProps
  extends Pick<
      FormControlProps,
      'type' | 'placeholder' | 'readOnly' | 'onChange'
    >,
    Pick<React.HTMLAttributes<HTMLFormElement>, 'className'>,
    Pick<FormGroupProps, 'controlId' | 'as'>,
    Pick<React.HTMLAttributes<HTMLInputElement>, 'value'> {
  label: string;
  hint?: string;
  duration?: number;
}

export const User: React.FC<UserProps> = ({
  label,
  type,
  placeholder,
  as,
  className,
  controlId,
  value,
  hint,
  readOnly,
  duration,
  onChange,
}) => {
  return (
    <Form.Group className={className} controlId={controlId} as={as ? as : Col}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
      {duration ? (
        <ShowComponentWithDuration
          duration={duration}
          element={<Form.Text muted>{hint}</Form.Text>}
        />
      ) : (
        <Form.Text muted>{hint}</Form.Text>
      )}
    </Form.Group>
  );
};
