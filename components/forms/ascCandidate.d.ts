// types.ts
export interface IFormInputsBase {
    FirstName: string;
    SecondName: string;
    Email: string;
    Category: string;
    Question: string;
  }
  
  export interface ICityCouncilFormInputs extends IFormInputsBase {}
  
  export interface ICountyCouncilFormInputs extends IFormInputsBase {
    Constituency: number; // Dla Rady Powiatu, pole Okręg jest wymagane
  }
  
  export interface IMayorFormInputs extends IFormInputsBase {}
  
  export interface ISelectOption {
    value: number;
    label: string;
  }
  
  export type TFormChildrenProps<T> = {
    control: Control<T>;
  };