import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, useTheme } from '@mui/material';
import MaterialTextInput from '../shared/textField';
import SelectOptions from '../shared/selectOptions'; // Ensure this import path is correct
import { selectOptions } from './askCondidate.Core';

// Define the keys as simple strings to prevent TypeScript issues.
enum FormInputKey  {
  firstname =  'firstname',
  secondname = 'secondname',
  email = 'email',
  district= 'district',
  category = 'category',
  question=  'question',
  // Preference: 'Preference',
}

// type FormInputKey = typeof FormInputKey[keyof typeof FormInputKey];


const formInputLabels = {
  firstname: 'Imię',
  secondname: 'Nazwisko',
  email: 'Email',
  district: 'Okręg',
  category: 'Kategoria',
  question: 'Pytanie',
  // Preference: 'Preferencja',
};

interface IFormInputs {
  firstname: string;
  secondname: string;
  email: string;
  district: number | undefined;
  category: string;
  question: string;
  // Preference: number | '';
}

const AskoCandidateForm = () => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      firstname: '',
      secondname: '',
      email: '',
      district: undefined,
      category: '',
      question: '',
      // Preference: '',
    },
  });

  const theme = useTheme();
  const onSubmit = (data: IFormInputs) => console.log(data);

  const renderFormInput = (key: FormInputKey, field: any) => {
    switch (key) {
      case 'district':
      // case 'Preference':
        return (
          <Box sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
            <SelectOptions variant="outlined" myLabel={formInputLabels[key]} selectOptions={selectOptions[key]} {...field} />
          </Box>
        );
      default:
        return (
          <Box sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
            <MaterialTextInput label={formInputLabels[key]} {...field} />
          </Box>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(FormInputKey).map((key) => (
        <Controller
          key={key}
          name={key as FormInputKey}
          control={control}
          rules={{ required: true }}
          render={({ field }) => renderFormInput(key as FormInputKey, field)}
        />
      ))}
      <Button variant="contained" type="submit" >

        Wysyłam pytanie
      </Button>

    </form>
  );
};

export default AskoCandidateForm;
