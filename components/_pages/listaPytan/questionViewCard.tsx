import SignUp from "@/components/shared/signUp";
import CustomModal from "@/components/shared/modal";
import SignIn from "@/components/shared/signIn";
import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";

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
  const [open, setOpen] = React.useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  useEffect(() => {
    handleClose;
  }, [handleClose]);

  useEffect(() => {
    handleOpen;
  }, [handleOpen]);

  return (
    <>
      <CustomModal
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
          <SignIn>
            <Typography paragraph>
              Zaloguj się, żeby móc ocenić pytania
            </Typography>
          </SignIn>
          <SignUp>
            <Typography paragraph>Zarejestruj się</Typography>
          </SignUp>
        </Paper>
      </CustomModal>
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
        <Button variant="contained" size="large" onClick={handleOpen}>
          Dodaj opinię
        </Button>
      </Paper>
    </>
  );
};

export default QuestionViewCard;
