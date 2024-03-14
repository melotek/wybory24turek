// types.ts
export interface IFormInputs {
    firstname: string;
    secondname: string;
    Email: string;
    district?: number; // Można użyć "?" dla pól opcjonalnych
    category: string;
    question: string;
  }
  
  export interface ISelectOption {
    value: number;
    label: string;
  }
  
  export type TFormChildrenProps = {
    control: Control<IFormInputs>;
  };