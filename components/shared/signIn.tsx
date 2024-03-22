import {
  ErrorResolver,
  ValidationSignInForm,
  validationSignInFormSchema,
} from "@/helpers/formValidations";
import { PropsWithChildren } from "@/types";
import { Box, useTheme } from "@mui/material";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { ZodError } from "zod";
import MyButton from "./buttons";
import MaterialTextInput from "./textField";

enum SignInFormInputKey {
  email = "email",
  password = "password",
}

const SignInformInputLabels = {
  email: "Email",
  password: "Hasło",
};

export interface ISignInFormInputs {
  email: string;
  password: string;
}

const SignIn = ({ children }: PropsWithChildren) => {
  const refEmail = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidationSignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: async (data) => {
      try {
        validationSignInFormSchema.parse(data);
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

  const renderFormInput = (key: SignInFormInputKey, field: any) => {
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
          label={SignInformInputLabels[key]}
          error={Boolean(errors[key])} // Pass a boolean to indicate if this field is in error state
          helperText={errorMessage} // Pass the error message to display below the input
          {...field}
        />
      </Box>
    );
  };

  return (
    <>
      <>{children}</>
      <>
        <form onSubmit={handleSubmit(() => {})}>
          {Object.keys(SignInFormInputKey).map((key) => (
            <Controller
              key={key}
              name={key as SignInFormInputKey}
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                renderFormInput(key as SignInFormInputKey, field)
              }
            />
          ))}
          <MyButton
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
            isRounded={true}
          >
            Zaloguj
          </MyButton>
        </form>
      </>
    </>
  );
};

export default SignIn;
