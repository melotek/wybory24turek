import AskoCandidateToCityForm from "@/components/forms/askCandidateForCityCouncil";
import AskCandidateToCountyForm from "@/components/forms/askCandidateForCountyCouncil";
import AskCandidateForMayorForm from "@/components/forms/askCandidateForMayor";
import TabListComponent from "@/components/forms/tabList";
import CouncilInstrucitons from "@/components/instructions/cityCouncilForm.instructions";
import CountyInstrucitons from "@/components/instructions/countyCouncilForm.instructions";
import MayorInstructions from "@/components/instructions/mayorForm.instructions";
import CustomModal from "@/components/shared/modal";
import SubPageHeader from "@/components/shared/subPageHeader";
import useApiResponse, { State } from "@/hooks/zustand/useApiResoponse";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  useTheme,
  Box,
  Tab,
  Paper,
  Grid,
  Typography,
  Breakpoints,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

const ZadajPytanie = (props: Props) => {
  const response = useApiResponse((state: State) => state.response);
  const [open, setOpen] = React.useState(false);
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

      router.push(newPathname);
      setValue(newValue);
    },
    [forms, formPathnames, router],
  );
  return (
    <Box ref={rootRef}>
      <SubPageHeader title="Zadaj pytanie przyszłemu radnemu rady gminy" />

      <CustomModal
        // open={response !== null}
        open={open}
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
            lorem ipsum dolerem
            {/* {response && response.data.message} */}
          </Typography>
        </Paper>
      </CustomModal>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabListComponent
            forms={forms}
            selectedTab={value}
            handleChange={handleChange}
            ariaLabel="Pytania do kandydatów do rady miasta"
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
                <AskoCandidateToCityForm />
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
