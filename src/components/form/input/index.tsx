import React, { ReactElement } from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../../theme';
import { FieldError } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  id?: string;
  error?: FieldError;
  value?: string | Date | number;
  className?: string;
  setRef?: (arg: any) => void;
  onChange?: (arg: any) => void;
}
export const Input = ({
  label,
  name,
  type,
  id,
  value,
  error,
  className,
  setRef,
  onChange,
}: InputProps): ReactElement => {
  const classes = useStyles();

  return (
    <TextField
      className={className ?? classes.input}
      helperText={error?.message}
      error={!!error}
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      inputRef={setRef}
      value={value}
      label={label}
      InputLabelProps={{
        shrink: type === 'date' ? true : undefined,
      }}
      fullWidth
    />
  );
};
