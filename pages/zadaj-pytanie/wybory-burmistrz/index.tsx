import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";
import TabListComponent from "@/components/forms/tabList";
import CouncilInstrucitons from "@/components/instructions/cityCouncilForm";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm";
import MayorInstructions from "@/components/instructions/mayorForm";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme, Box, Tab, Paper, Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

const ZadajPytanie = (props: Props) => {
  const theme = useTheme();
  const forms = [
    "Pytanie do kandydatów na burmistrza",
    "Pytanie do kandydatów na radnych gminy",
    "Pytanie do kandydatów na radnych powiatu",
  ];
  const [value, setValue] = React.useState(forms[0]);
  const formPathnames = [
    "wybory-burmistrz",
    "wybory-gmina",
    "wybory-powiat"
  ]
  const router = useRouter()
  
  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      // Ustalanie indeksu na podstawie wartości newValue
      const formIndex = forms.findIndex((form) => form === newValue);

      // Ustawianie pathname na podstawie znalezionego indeksu
      const newPathname = formPathnames[formIndex];
      router.push(newPathname)
      setValue(newValue);
    },
    [forms, formPathnames, router]
  );
  return (
    <Box
    
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        
      }}
    >


      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabListComponent forms={forms} handleChange={handleChange} ariaLabel="Pokaż pytania do kandydata na butmistrza"/> 

        </Box>
        <Box>
              <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
        <Paper  sx={{padding: theme.spacing(4)}}>

              <AskCandidateForMayorForm />
        </Paper>
        </Grid>
        <Grid item xs={12}md={6}>
        <Paper  sx={{padding: theme.spacing(4)}}>
                            <MayorInstructions />

        </Paper>
        </Grid>

        </Grid>
        </Box>

      </TabContext>
    </Box>
  );
};

export default ZadajPytanie;
