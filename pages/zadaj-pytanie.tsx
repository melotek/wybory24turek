import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";
import CouncilInstrucitons from "@/components/instructions/cityCouncilForm";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm";
import MayorInstructions from "@/components/instructions/mayorForm";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme, Box, Tab, Paper, Grid } from "@mui/material";
import React, { useEffect } from "react";

type Props = {};

const ZadajPytanie = (props: Props) => {
  const theme = useTheme();
  const forms = [
    "Pytanie do kandydatów na burmistrza",
    "Pytanie do kandydatów na radnych gminy",
    "Pytanie do kandydatów na radnych powiatu",
  ];
  const [value, setValue] = React.useState(forms[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderForms = () => {
    {
      switch (value) {
        case "Pytanie do kandydatów na burmistrza":
          return (
            <TabPanel value="Pytanie do kandydatów na burmistrza">
              <AskCandidateForMayorForm />
            </TabPanel>
          );
        case "Pytanie do kandydatów na radnych gminy":
          return (
            <TabPanel value="Pytanie do kandydatów na radnych gminy">
              <AskoCandidateToCityForm />
            </TabPanel>
          );
        case "Pytanie do kandydatów na radnych powiatu":
          return (
            <TabPanel value="Pytanie do kandydatów na radnych powiatu">
              <AskCandidateToCountyForm />
            </TabPanel>
          );
      }
    }
  };
  
  const renderFormInstructions = () => {
    {
      switch (value) {
        case "Pytanie do kandydatów na burmistrza":
          return (
            <TabPanel value="Pytanie do kandydatów na burmistrza">
                            <MayorInstructions />

            </TabPanel>
          );
        case "Pytanie do kandydatów na radnych gminy":
          return (
            <TabPanel value="Pytanie do kandydatów na radnych gminy">
                            <CouncilInstrucitons />

            </TabPanel>
          );
        case "Pytanie do kandydatów na radnych powiatu":
          return (
            <TabPanel value="Pytanie do kandydatów na radnych powiatu">
                            <CountyInstrucitons />

            </TabPanel>
          );
      }
    }

  }
  useEffect(() => {
    handleChange;
  }, [handleChange]);
  return (
    <Box
      sx={{
        marginTop: theme.spacing(22),
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: {
          xs: "90%",
          sm: "80%",
        },
      }}
    >


      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {forms.map((form) => (
              <Tab label={form} value={form} />
            ))}
          </TabList>
        </Box>
        <Box>
              <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
        <Paper>

        {renderForms()}
        </Paper>
        </Grid>
        <Grid item xs={12}md={6}>
        <Paper>
        {renderFormInstructions()}
        </Paper>
        </Grid>

        </Grid>
        </Box>

      </TabContext>
    </Box>
  );
};

export default ZadajPytanie;
