import React, { forwardRef } from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';

type Ref = HTMLInputElement;

const MaterialTextInput = forwardRef<Ref, TextFieldProps>( ({
  label,
  value,
  onChange,
  type = 'text',
  error = false,
  helperText = '',
  multiline = false,
  rows = 1,
}, ref ) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      helperText={helperText}
      multiline={label === "Pytanie" ? true : multiline}
      rows={label === "Pytanie" ? 15 : rows}
      ref={ref}
    />
  );
});

export default MaterialTextInput;
