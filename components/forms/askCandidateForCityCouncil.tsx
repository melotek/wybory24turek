import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, useTheme } from "@mui/material";
import MaterialTextInput from "../shared/textField";
import SelectOptions from "../shared/selectOptions"; // Ensure this import path is correct
import { selectOptions } from "./askCondidate.Core";
import questionsAPI from "@/actions/questionsApi";
import { AxiosResponse } from "axios";
import {
  validationCityCouncilFromSchema,
  ErrorResolver,
} from "@/helpers/formValidations";
import { ZodError } from "zod";
import MyButton from "../shared/buttons";
import useApiResponse from "@/hooks/zustand/useApiResoponse";

// Define the keys as simple strings to prevent TypeScript issues.
enum FormInputKey {
  firstname = "firstname",
  secondname = "secondname",
  // email = 'email',
  district = "district",
  category = "category",
  question = "question",
  // Preference: 'Preference',
}

// type FormInputKey = typeof FormInputKey[keyof typeof FormInputKey];

const formInputLabels = {
  firstname: "Imię",
  secondname: "Nazwisko",
  // email: 'Email',
  district: "Okręg",
  category: "Kategoria",
  question: "Pytanie",
  // Preference: 'Preferencja',
};

interface IFormInputs {
  firstname: string;
  secondname: string;
  // email: string;
  district: number | undefined;
  category: string;
  question: string;
  // Preference: number | '';
}

const AskoCandidateToCityForm = () => {
  // const [apiResponse, setApiResponse] = useState<AxiosResponse<any, any> | null>(null)
  const setResponse = useApiResponse((state) => state.setResponse);
  const ref = useRef<HTMLInputElement | null>(null);

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      firstname: "",
      secondname: "",
      // email: '',
      district: undefined,
      category: "",
      question: "",
      // Preference: '',
    },
    resolver: async (data) => {
      try {
        validationCityCouncilFromSchema.parse(data);
        return { values: data, errors: {} }; // No errors
      } catch (error) {
        if (error instanceof ZodError) {
          return { values: {}, errors: ErrorResolver(error) };
        }
        // For unexpected errors
        console.error(error);
        return { values: {}, errors: {} }; // You might want to handle this case differently
      }
    },
  });

  const theme = useTheme();
  const onSubmit = async (data: IFormInputs) => {
    try {
      const response = await questionsAPI.createCityCouncilquestion(data);
      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSubmit;
  }, [onSubmit]);
  const renderFormInput = (key: FormInputKey, field: any) => {
    switch (key) {
      case "district":
        // case 'Preference':
        return (
          <Box
            sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
          >
            <SelectOptions
              variant="outlined"
              myLabel={formInputLabels[key]}
              selectOptions={selectOptions[key].city}
              {...field}
            />
          </Box>
        );
      default:
        return (
          <Box
            sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
          >
            <MaterialTextInput
              ref={ref}
              label={formInputLabels[key]}
              {...field}
            />
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
      <MyButton
        variant="contained"
        type="submit"
        color="secondary"
        size="large"
        isRounded={true}
      >
        Wysyłam pytanie
      </MyButton>
    </form>
  );
};

export default AskoCandidateToCityForm;
