export interface IBaseFormInputs {
    FirstName: string;
    SecondName: string;
    Email: string;
    Question: string;
    Category: string;
  }

  export const selectOptions = {
    Constituency: {
        city: Array.from({ length: 15 }, (_, i) => ({ value: i + 1, label: `Okręg ${i + 1}` })),
        county: Array.from({ length: 5 }, (_, i) => ({ value: i + 1, label: `Okręg ${i + 1}` })),
    } 
    // Preference: Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: `Waga pytania ${i + 1}` })),
  };
  