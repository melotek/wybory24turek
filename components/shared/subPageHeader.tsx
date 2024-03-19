import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const SubPageHeader: any = ({ title }: Props) => {
  const theme = useTheme();
  return (
    <Box
      component="header"
      sx={{
        marginBottom: theme.spacing(8),
        position: "relative",
        backgroundColor: "primary.main",
        minHeight: theme.spacing(44),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(20, 4),
        },
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(20, 8),
        },
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
        {title}
      </Typography>
    </Box>
  );
};

export default SubPageHeader;
