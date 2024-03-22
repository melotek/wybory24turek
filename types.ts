import { Document } from "mongoose";
import { ReactNode } from "react";
export interface User {
  firstname: string;
  username: string;
  passwordHash: string; // Hasło powinno być przechowywane w bezpiecznej formie jako hash
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  firstname: string;
  secondname: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  //ToDo - add moderator to role
}
export interface IAuthor {
  firstname: string;
  secondname: string;
  email?: string;
}
export type Recipient = "MAYOR" | "CITY_COUNCIL" | "COUNTY_COUNCIL";
export interface IquestionForms<Recipient> extends IAuthor, Document {
  _id: string;
  question: string;
  category: string;
  recipient: Recipient; // Additional field for questions to the city council or county

  district?: string;
  status?: "draft" | "published" | "rejected";
  // Dodatkowe pole dla pytań do rady gminy lub powiatu
}

export interface IRating {
  userId: { _id: string }; // Id użytkownika
  questionId: { _id: string }; // Id pytania
  rating: number; // Ocena w skali od 1 do 10
}

export interface IquestionRating {
  userId: { _id: string }; // Autor pytania
  questionId: { _id: string }; // Treść pytania
  rating: Pick<IRating, "rating">[]; // Średnia ocena pytania
} // Rating.ts
export interface IAppData {
  questionForms: IquestionForms<"MAYOR" | "CITY_COUNCIL" | "COUNTY_COUNCIL">[]; // Formularze pytań
  users: User[]; // Zalogowani użytkownicy
  ratings: IRating[]; // Oceny pytań
  questionRates: IquestionRating[]; // Zapytania widoczne do oceny
}

// Możliwe dodatkowe typy dla obsługi formularza i autoryzacji:

// LoginForm.ts
export interface LoginFormValues {
  username: string;
  password: string;
}

// RegisterForm.ts
export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// AuthPayload.ts
export interface AuthPayload {
  user: User;
  token: string; // JWT token
}

// ErrorResponse.ts
export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}
export interface IOkręgWyborczy {
  nr: number;
  zasieg: string;
  liczbaMandatow: number;
}
export type PropsWithChildren<P = unknown> = P & { children: ReactNode };
