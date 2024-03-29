import questionsAPI from "@/actions/questionsApi";
import {
  ErrorResolver,
  ValidationMayorFrom,
  validationMayorFromSchema,
} from "@/helpers/formValidations";
import { Box, useTheme } from "@mui/material";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ZodError } from "zod";
import MyButton from "../shared/buttons";
import MaterialTextInput from "../shared/textField";

enum FormInputKey {
  firstname = "firstname",
  secondname = "secondname",
  // email = "email",
  //   district= 'district',
  category = "category",
  question = "question",
}

const formInputLabels = {
  firstname: "Imię",
  secondname: "Nazwisko",
  // email: "Email",
  category: "Kategoria",
  question: "Pytanie",
};

export interface IFormInputs {
  firstname: string;
  secondname: string;
  question: string;
  // email?: string;
  category?: string;
  // Preference: number | '';
}

const AskCandidateForMayorForm = () => {
  const [apiResponse, setApiResponse] = useState<AxiosResponse<
    any,
    any
  > | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationMayorFrom>({
    defaultValues: {
      firstname: "",
      secondname: "",
      // email: "",
      category: "",
      question: "",
      // Preference: '',
    },
    resolver: async (data) => {
      try {
        validationMayorFromSchema.parse(data);
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
  /* eslint-disable no-alert, no-console */
  const onSubmit = async (data: IFormInputs) => {
    try {
      const response = await questionsAPI.createMayorquestion(data);

      setApiResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
  /* eslint-enable no-alert */

  useEffect(() => {
    onSubmit;
  }, [onSubmit]);

  const renderFormInput = (key: FormInputKey, field: any) => {
    // Extract error message for the specific field
    const errorMessage = errors[key]?.message;
    const ref = useRef<HTMLInputElement | null>(null);
    return (
      <Box sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}>
        <MaterialTextInput
          ref={ref}
          type="text"
          onChange={(e) => {
            e.target.value.replace(/^\s+/, "");
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

export default AskCandidateForMayorForm;
