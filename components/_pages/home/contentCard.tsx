import { Paper, useTheme } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";
type Props = {};

const ContentCard = ({ children }: PropsWithChildren<Props>) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        height: theme.spacing(40),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(0, 4),
        },
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(0, 4),
        },
      }}
    >
      {children}
    </Paper>
  );
};

export default ContentCard;
