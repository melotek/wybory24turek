import { Box, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
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
    <Paper
      sx={{
        borderTop: `2px solid ${theme.palette.primary.main}`,
        my: 4,
        p: 2,
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        borderRight: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        mb={3}
        mt={1}
      >
        <Typography
          component="h4"
          variant="body2"
          fontWeight={600}
          sx={{ color: theme.palette.primary.main }}
        >
          {question.category}
        </Typography>
        <Image
          width={30}
          height={30}
          src="/images/person-entering-booth.svg"
          alt="pytanie wyborcze"
        ></Image>
      </Box>
      <Typography component="span" variant="caption">
        Dodano: {question.createdAt.toLocaleString()}
      </Typography>

      <Typography paragraph variant="body2" lineHeight={1.6}>
        {question.question}
      </Typography>
      <Typography>{question.firstname}</Typography>
      <Typography>{question.secondname}</Typography>
    </Paper>
  );
};

export default QuestionViewCard;
