import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, useTheme } from '@mui/material';
import MaterialTextInput from '../shared/textField';
import SelectOptions from '../shared/selectOptions'; // Ensure this import path is correct
import { selectOptions } from './askCondidate.Core';
import QuestionsAPI from '@/actions/questionsApi';

// Define the keys as simple strings to prevent TypeScript issues.
enum FormInputKey  {
  FirstName =  'FirstName',
  SecondName = 'SecondName',
  Email = 'Email',
  Constituency= 'Constituency',
  Category = 'Category',
  Question=  'Question',
  // Preference: 'Preference',
}

// type FormInputKey = typeof FormInputKey[keyof typeof FormInputKey];


const formInputLabels = {
  FirstName: 'Imię',
  SecondName: 'Nazwisko',
  Email: 'Email',
  Constituency: 'Okręg',
  Category: 'Kategoria',
  Question: 'Pytanie',
  // Preference: 'Preferencja',
};

interface IFormInputs {
  FirstName: string;
  SecondName: string;
  Email: string;
  Constituency: number | undefined;
  Category: string;
  Question: string;
  // Preference: number | '';
}

const AskoCandidateToCityForm = () => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      FirstName: '',
      SecondName: '',
      Email: '',
      Constituency: undefined,
      Category: '',
      Question: '',
      // Preference: '',
    },
  });

  const theme = useTheme();
  const onSubmit = async (data: IFormInputs) => {
    
  await  QuestionsAPI.createCityCouncil(data)
    
    console.log(data);}

  const renderFormInput = (key: FormInputKey, field: any) => {
    switch (key) {
      case 'Constituency':
      // case 'Preference':
        return (
          <Box sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
            <SelectOptions variant="outlined" myLabel={formInputLabels[key]} selectOptions={selectOptions[key].city} {...field} />
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

export default AskoCandidateToCityForm;
