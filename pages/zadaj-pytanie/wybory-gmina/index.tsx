import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";
import TabListComponent from "@/components/forms/tabList";
import CouncilInstrucitons from "@/components/instructions/cityCouncilForm.instructions";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm.instructions";
import MayorInstructions from "@/components/instructions/mayorForm.instructions";
import CustomModal from "@/components/shared/modal";
import useApiResponse, { State } from "@/hooks/zustand/useApiResoponse";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme, Box, Tab, Paper, Grid } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

const ZadajPytanie = (props: Props) => {
  const response = useApiResponse((state: State) => state.response);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const forms = [
    "Pytanie do kandydatów na burmistrza",
    "Pytanie do kandydatów na radnych gminy",
    "Pytanie do kandydatów na radnych powiatu",
  ];
  const [value, setValue] = React.useState(forms[1]);
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
    <Box
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
      ref={rootRef}
    >
      <CustomModal
        open={response !== null}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <>
          <h2 id="modal-title">ups coś poszło nie tak</h2>
          <p id="modal-description">{response && response.data.message}</p>
        </>
      </CustomModal>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabListComponent
            forms={forms}
            handleChange={handleChange}
            ariaLabel="Pytania do kandydatów do rady miasta"
          />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: theme.spacing(4) }}>
                <AskoCandidateToCityForm />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: theme.spacing(4) }}>
                <CouncilInstrucitons />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </TabContext>
    </Box>
  );
};

export default ZadajPytanie;
