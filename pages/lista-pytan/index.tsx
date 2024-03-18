import questionsAPI from "@/actions/questionsApi";
import { fetcher } from "@/actions/utills";
import QuestionViewUserPanel from "@/components/_pages/listaPytan/questionViewUserPanel";
import { Container, Paper, Typography, useTheme } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import useSWR from "swr";

const Index = () => {
  const { data, error, isLoading } = useSWR<any, any>(
    "/api/v1/questions",
    fetcher,
  );
  const theme = useTheme();
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
      <Container
        component="header"
        sx={{
          minWidth: "100svw",
          backgroundColor: "primary.main",
          minHeight: theme.spacing(44),
          paddingTop: theme.spacing(20),
        }}
      >
        <Typography
          color={theme.palette.text.secondary}
          variant="h4"
          component="h2"
          fontWeight={600}
          sx={{
            position: "relative",
            paddingY: theme.spacing(2),
            "&::after": {
              content: '""',
              position: "absolute",
              // top: theme.spacing(13),
              // left: 0,
              display: "grid",
              placeItems: "center",
              // color: theme.palette.text.primary,
              backgroundSize: "50% 50%",
              backgroundImage: "url(/images/liliaWatermark.svg)",
              width: theme.spacing(13),
              height: theme.spacing(15),
              // backgroundColor: theme.palette.secondary.main,
              zIndex: 1,
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: theme.spacing(4),
              height: theme.spacing(0.4),
              backgroundColor: theme.palette.secondary.main,
              zIndex: 1,
            },
          }}
        >
          Zestawienie pytań.
        </Typography>
      </Container>
      <Container sx={{ marginTop: theme.spacing(8) }}>
        <QuestionViewUserPanel data={data} />
      </Container>
    </>
  );
};

export default Index;
