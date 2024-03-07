import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme, Box, Tab } from "@mui/material";
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

  console.log();
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
  useEffect(() => {
    handleChange;
  }, [handleChange]);
  return (
    <Box
      sx={{
        marginTop: theme.spacing(22),
        marginLeft: "auto",
        marginRight: "auto",
        height: "150vh",
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
        {renderForms()}

      </TabContext>
    </Box>
  );
};

export default ZadajPytanie;
