import React from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';



const MaterialTextInput = ({
  label,
  value,
  onChange,
  type = 'text',
  error = false,
  helperText = '',
  multiline = false,
  rows = 1,
}: TextFieldProps) => {
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
      multiline={multiline}
      rows={rows}
    />
  );
};

export default MaterialTextInput;
