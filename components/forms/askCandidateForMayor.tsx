import React from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { Box, Button, useTheme } from '@mui/material';
import MaterialTextInput from '../shared/textField';
import SelectOptions from '../shared/selectOptions'; // Ensure this import path is correct
import { selectOptions } from './askCondidate.Core';
import { ZodError, z } from 'zod';

const SignUpSchema = z.object({
  FirstName: z.string({
    invalid_type_error: 'To nie jest prawidłowe imię',
  }).min(3, "Imię musi mieć co najmniej 3 znaki").max(20, "Imię nie może mieć więcej niż 20 znaków").regex(/^[A-Za-z]+$/i, "Imię musi składać się z liter"),
  SecondName: z.string({
    invalid_type_error: 'To nie jest prawidłowe nazwisko',
  }).min(3, "Nazwisko musi mieć co najmniej 3 znaki").max(25, "Nazwisko nie może mieć więcej niż 20 znaków").regex(/^[A-Za-z]+$/i, "Nazwisko musi składać się z liter"),
  Email: z.string().email({message: "To nie jest prawidłowy email"}).regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "To nie jest prawidłowy email"),
  Category: z.string({
    invalid_type_error: 'To nie jest prawidłowa kategoria',
  }).min(3, "Kategoria musi mieć co najmniej 3 znaki").max(20, "Kategoria nie może mieć więcej niż 20 znaków").regex(/^[A-Za-z]+$/i, "Kategoria musi składać się z liter"),

  Question: z.string({
    invalid_type_error: 'To nie jest prawidłowe pytanie',
  }).min(3, "Pytanie musi mieć co najmniej 3 znaki").max(800, "Pytanie nie może mieć więcej niż 800 znaków"),
  
  // Preference: z.number().optional(),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
// Define the keys as simple strings to prevent TypeScript issues.
enum FormInputKey  {
  FirstName =  'FirstName',
  SecondName = 'SecondName',
  Email = 'Email',
//   Constituency= 'Constituency',
  Category = 'Category',
  Question=  'Question',
  // Preference: 'Preference',
}

// type FormInputKey = typeof FormInputKey[keyof typeof FormInputKey];


const formInputLabels = {
  FirstName: 'Imię',
  SecondName: 'Nazwisko',
  Email: 'Email',
//   Constituency: 'Okręg',
  Category: 'Kategoria',
  Question: 'Pytanie',
  // Preference: 'Preferencja',
};

export interface IFormInputs {
  FirstName: string;
  SecondName: string;
  Email: string;
  Category: string;
  Question: string;
  // Preference: number | '';
}
const ErrorResolver = (error: ZodError<any>): Record<string, FieldError> => {
  const formErrors: Record<string, FieldError> = {};
  error.errors.forEach((err) => {
    // You can customize the message or error type further based on your needs
    const message = err.message || "Invalid value";
    if (!formErrors[err.path[0]]) { // Avoid overwriting errors
      formErrors[err.path[0]] = { type: err.code, message };
    }
  });
  return formErrors;
};

const AskCandidateForMayorForm = () => {

  const { handleSubmit, control, formState: { errors }, setError } = 
  useForm<SignUpSchemaType>({
    defaultValues: {
      FirstName: '',
      SecondName: '',
      Email: '',
      Category: '',
      Question: '',
      // Preference: '',
    },
    resolver: async (data) => {
      try {
        SignUpSchema.parse(data);
        return { values: data, errors: {} }; // No errors
      } catch (error) {
        if (error instanceof ZodError) {
          return { values: {}, errors: ErrorResolver(error) };
        }
        // For unexpected errors
        console.error(error);
        return { values: {}, errors: {} }; // You might want to handle this case differently
      }
    },});

  const theme = useTheme();
  const onSubmit = (data: IFormInputs) => console.log(data);




  const renderFormInput = (key: FormInputKey, field: any) => {
    // Extract error message for the specific field
    const errorMessage = errors[key]?.message;
    
    return (
      <Box sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
        <MaterialTextInput
        type='text'
        onChange={(e) => {
          e.target.value.replace(/^\s+/, '');
        }}
          label={formInputLabels[key]}
          error={Boolean(errors[key])} // Pass a boolean to indicate if this field is in error state
          helperText={errorMessage} // Pass the error message to display below the input
          {...field}
        />
      </Box>
    );
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

export default AskCandidateForMayorForm;

