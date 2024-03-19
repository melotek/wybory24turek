import theme from "@/ui/config/theme";
import { Box, Typography, useTheme } from "@mui/material";
import Link, { LinkProps } from "@/components/shared/linkCore.composed";
import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  const theme = useTheme();
  const spacing = theme.spacing(6);
  const negativeXLogoSpacing = theme.spacing(3);

  return (
    <Link
      color="inherit"
      href="/"
      sx={{
        alignItems: "center",
        display: "flex",
        textDecoration: "none",
        marginBottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: theme.palette.primary.main,
          height: spacing,
        }}
      >
        <Typography
          component="h1"
          variant="subtitle2"
          color="white"
          sx={{ lineHeight: 1, padding: 0 + " " + spacing, marginBottom: 0 }}
        >
          Wybory Turek
        </Typography>
      </Box>
      <img
        src="/images/logo.png"
        alt="logo miasta turku"
        style={{
          objectFit: "contain",
          width: spacing,
          height: spacing,
          marginLeft: "-" + negativeXLogoSpacing,
        }}
      />
    </Link>
  );
};

export default Logo;
