import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";
import TabListComponent from "@/components/forms/tabList";
import CouncilInstrucitons from "@/components/instructions/cityCouncilForm.instructions";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm.instructions";
import MayorInstructions from "@/components/instructions/mayorForm.instructions";
import SubPageHeader from "@/components/shared/subPageHeader";
import useApiResponse from "@/hooks/zustand/useApiResoponse";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme, Box, Tab, Paper, Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { create } from "zustand";

type Props = {};
const ZadajPytanie = (props: Props) => {
  const theme = useTheme();
  const forms = [
    "Pytanie do kandydatów na burmistrza",
    "Pytanie do kandydatów na radnych gminy",
    "Pytanie do kandydatów na radnych powiatu",
  ];
  const [value, setValue] = React.useState(forms[0]);
  const formPathnames = ["wybory-burmistrz", "wybory-gmina", "wybory-powiat"];
  const router = useRouter();

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      // Ustalanie indeksu na podstawie wartości newValue
      const formIndex = forms.findIndex((form) => form === newValue);

      // Ustawianie pathname na podstawie znalezionego indeksu
      const newPathname = formPathnames[formIndex];
      router.push(newPathname);
      setValue(newValue);
    },
    [forms, formPathnames, router],
  );
  return (
    <Box>
      <SubPageHeader title="Zadaj pytanie przyszłemu burmistrzowi" />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabListComponent
            selectedTab={value}
            forms={forms}
            handleChange={handleChange}
            ariaLabel="Pokaż pytania do kandydata na butmistrza"
          />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    padding: theme.spacing(6, 4),
                  },
                  [theme.breakpoints.down("md")]: {
                    padding: theme.spacing(4, 2),
                  },
                })}
              >
                <AskCandidateForMayorForm />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    padding: theme.spacing(6, 4),
                  },
                  [theme.breakpoints.down("md")]: {
                    padding: theme.spacing(4, 2),
                  },
                })}
              >
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
