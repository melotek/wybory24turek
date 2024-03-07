// User.ts
export interface User {
    id: string;
    username: string;
    passwordHash: string; // Hasło powinno być przechowywane w bezpiecznej formie jako hash
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Question.ts
  export interface Question {
    id: string;
    authorId: string; // Referencja do identyfikatora użytkownika
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Rating.ts
  export interface Rating {
    id: string;
    questionId: string; // Referencja do identyfikatora pytania
    userId: string; // Referencja do identyfikatora użytkownika oceniającego pytanie
    value: number; // Wartość oceny, np. od 1 do 5
    createdAt: Date;
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
  