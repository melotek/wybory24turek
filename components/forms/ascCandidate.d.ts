// types.ts
export interface IFormInputs {
    FirstName: string;
    SecondName: string;
    Email: string;
    Constituency?: number; // Można użyć "?" dla pól opcjonalnych
    Category: string;
    Question: string;
  }
  
  export interface ISelectOption {
    value: number;
    label: string;
  }
  
  export type TFormChildrenProps = {
    control: Control<IFormInputs>;
  };