import questionsAPI from "@/actions/questionsApi";
import { fetcher } from "@/actions/utills";
import QuestionViewUserPanel from "@/components/_pages/listaPytan/questionViewUserPanel";
import SubPageHeader from "@/components/shared/subPageHeader";
import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
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
      <SubPageHeader title="Lista pytań" />
      <QuestionViewUserPanel data={data} />
    </>
  );
};

export default Index;
