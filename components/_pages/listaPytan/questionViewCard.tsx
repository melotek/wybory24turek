import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

type Props = {
  question: {
    category: string;
    firstname: string;
    secondname: string;
    question: string;
    createdAt: string;
  };
};

const QuestionViewCard = ({ question }: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography sx={{ color: theme.palette.primary.main }}>
        {question.category}
      </Typography>
      <Typography>{question.firstname}</Typography>
      <Typography>{question.secondname}</Typography>
      <Typography>{question.question}</Typography>
      <Typography>{question.createdAt}</Typography>
    </Box>
  );
};

export default QuestionViewCard;
