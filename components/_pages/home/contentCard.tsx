import { Paper, useTheme } from "@mui/material";
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
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(0, 4),
          height: theme.spacing(80),
        },
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(0, 4),
          height: theme.spacing(100),
        },
      }}
    >
      {children}
    </Paper>
  );
};

export default ContentCard;
