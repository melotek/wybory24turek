export interface IBaseFormInputs {
    firstname: string;
    secondname: string;
    Email: string;
    question: string;
    category: string;
  }

  export const selectOptions = {
    district: {
        city: Array.from({ length: 4 }, (_, i) => ({ value: i + 1, label: `Okręg ${i + 1}` })),
        county: Array.from({ length: 5 }, (_, i) => ({ value: i + 1, label: `Okręg ${i + 1}` })),
    } 
    // Preference: Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: `Waga pytania ${i + 1}` })),
  };
  