import { FieldError } from "react-hook-form";
import { ZodError, z } from "zod";

const validationMayorFromSchema = z.object({
    firstname: z.string({
      invalid_type_error: 'To nie jest prawidłowe imię',
    }).min(3, "Imię musi mieć co najmniej 3 znaki").max(20, "Imię nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i, "Imię musi składać się z liter"),
    secondname: z.string({
      invalid_type_error: 'To nie jest prawidłowe nazwisko',
    }).min(3, "Nazwisko musi mieć co najmniej 3 znaki").max(25, "Nazwisko nie może mieć więcej niż 25 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/i, "Nazwisko musi składać się z liter, myślników i apostrofów"),
    email: z.string().email({ message: "To nie jest prawidłowy email" }).optional(),
    category: z.string({
      invalid_type_error: 'To nie jest prawidłowa kategoria',
    }).min(3, "Kategoria musi mieć co najmniej 3 znaki").max(20, "Kategoria nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-]+$/i, "Kategoria musi składać się z liter, spacji i myślników").optional(),
  
    question: z.string({
      invalid_type_error: 'To nie jest prawidłowe pytanie',
    }).min(3, "Pytanie musi mieć co najmniej 3 znaki").max(800, "Pytanie nie może mieć więcej niż 800 znaków"),
  });

  const validationCityCouncilFromSchema = z.object({
    firstname: z.string({
      invalid_type_error: 'To nie jest prawidłowe imię',
    }).min(3, "Imię musi mieć co najmniej 3 znaki").max(20, "Imię nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i, "Imię musi składać się z liter"),
    secondname: z.string({
      invalid_type_error: 'To nie jest prawidłowe nazwisko',
    }).min(3, "Nazwisko musi mieć co najmniej 3 znaki").max(25, "Nazwisko nie może mieć więcej niż 25 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/i, "Nazwisko musi składać się z liter, myślników i apostrofów"),
    email: z.string().email({ message: "To nie jest prawidłowy email" }).optional(),
    category: z.string({
      invalid_type_error: 'To nie jest prawidłowa kategoria',
    }).min(3, "Kategoria musi mieć co najmniej 3 znaki").max(20, "Kategoria nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-]+$/i, "Kategoria musi składać się z liter, spacji i myślników").optional(),
  
    question: z.string({
      invalid_type_error: 'To nie jest prawidłowe pytanie',
    }).min(3, "Pytanie musi mieć co najmniej 3 znaki").max(800, "Pytanie nie może mieć więcej niż 800 znaków"),
    district: z.number().int().min(2, "Okręg musi być liczbą całkowitą większą od 1").max(4, "Okręg musi być liczbą całkowitą mniejszą od 4"),
  });  
  const validationCountyCouncilFromSchema = z.object({
    firstname: z.string({
      invalid_type_error: 'To nie jest prawidłowe imię',
    }).min(3, "Imię musi mieć co najmniej 3 znaki").max(20, "Imię nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i, "Imię musi składać się z liter"),
    secondname: z.string({
      invalid_type_error: 'To nie jest prawidłowe nazwisko',
    }).min(3, "Nazwisko musi mieć co najmniej 3 znaki").max(25, "Nazwisko nie może mieć więcej niż 25 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-']+$/i, "Nazwisko musi składać się z liter, myślników i apostrofów"),
    email: z.string().email({ message: "To nie jest prawidłowy email" }).optional(),
    category: z.string({
      invalid_type_error: 'To nie jest prawidłowa kategoria',
    }).min(3, "Kategoria musi mieć co najmniej 3 znaki").max(20, "Kategoria nie może mieć więcej niż 20 znaków").regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s\-]+$/i, "Kategoria musi składać się z liter, spacji i myślników").optional(),
  
    question: z.string({
      invalid_type_error: 'To nie jest prawidłowe pytanie',
    }).min(3, "Pytanie musi mieć co najmniej 3 znaki").max(800, "Pytanie nie może mieć więcej niż 800 znaków"),
    district: z.number().int().min(2, "Okręg musi być liczbą całkowitą większą od 1").max(4, "Okręg musi być liczbą całkowitą mniejszą od 4"),
  });
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
  

type ValidationMayorFrom = z.TypeOf<typeof validationMayorFromSchema>;
type ValidationCityCouncilFrom = z.TypeOf<typeof validationCityCouncilFromSchema>;
type ValidationCountyCouncilFrom = z.TypeOf<typeof validationCountyCouncilFromSchema>;

export { validationMayorFromSchema, validationCityCouncilFromSchema, validationCountyCouncilFromSchema, ErrorResolver, type ValidationMayorFrom, type ValidationCityCouncilFrom, type ValidationCountyCouncilFrom }

