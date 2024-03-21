import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import TabListComponent from "@/components/forms/tabList";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm.instructions";
import CustomModal from "@/components/shared/modal";
import SubPageHeader from "@/components/shared/subPageHeader";
import useApiResponse, { State } from "@/hooks/zustand/useApiResoponse";

import { TabContext } from "@mui/lab";
import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

const ZadajPytanie = (props: Props) => {
  const theme = useTheme();
  const response = useApiResponse((state: State) => state.response);
  const [open, setOpen] = React.useState(false);
  const forms = [
    "Pytanie do kandydatów na burmistrza",
    "Pytanie do kandydatów na radnych gminy",
    "Pytanie do kandydatów na radnych powiatu",
  ];
  const [value, setValue] = React.useState<string>(forms[2]);
  const formPathnames = ["wybory-burmistrz", "wybory-gmina", "wybory-powiat"];
  const router = useRouter();
  useEffect(() => {
    if (response !== null) {
      setOpen(true);
    }
  }, [response]);
  const handleClose = () => setOpen(false);
  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      // Ustalanie indeksu na podstawie wartości newValue
      const formIndex = forms.findIndex((form) => form === newValue);

      // Ustawianie pathname na podstawie znalezionego indeksu
      const newPathname = formPathnames[formIndex];
      // Używanie hooka useRouter do przekierowania
      router.push(newPathname);
      setValue(newValue);
    },
    [forms, formPathnames, router],
  );
  return (
    <Box>
      <SubPageHeader title="Zadaj pytanie przyszłemu radnemu rady powiatu" />
      <CustomModal
        open={response !== null}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ alignSelf: "center", justifySelf: "center" }}
      >
        <Paper
          sx={{
            [theme.breakpoints.up("md")]: { padding: theme.spacing(6, 4) },
            [theme.breakpoints.down("md")]: { padding: theme.spacing(4, 2) },
            maxWidth: "20rem",
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle2" component="em" id="modal-title">
              W imieniu całej społeczności lokalnej, serdecznie dziękujemy za
              zainteresowanie wyborami.
            </Typography>
          </Box>
          <Typography sx={{ marginBottom: 0 }} paragraph id="modal-description">
            {response && response.data.message}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/lista-pytan")}
          ></Button>
        </Paper>
      </CustomModal>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabListComponent
            forms={forms}
            handleChange={handleChange}
            selectedTab={value}
            ariaLabel="Pytania do kandydatów do rady powiatu"
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
                <AskCandidateToCountyForm />
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
                <CountyInstrucitons />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </TabContext>
    </Box>
  );
};

export default ZadajPytanie;
