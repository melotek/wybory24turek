import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
const targetDate = Date.parse("Apr 07, 2024, 07");

type Props = {};

const TimeCounter = (props: Props) => {
  const theme = useTheme();
  const [loaded, isloaded] = useState(false);
  useEffect(() => {
    isloaded(true);
  }, []);
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <Box display="flex" flexDirection="column">
        <Typography paragraph variant="body2" mb={0}>
          Do wyborów pozostało:
        </Typography>
        <Box display="flex" flexDirection="row">
          <Typography paragraph variant="body2" marginRight={theme.spacing(1)}>
            {days} dni{" "}
          </Typography>
          <Typography paragraph variant="body2">
            {hours}:
          </Typography>
          <Typography paragraph variant="body2">
            {minutes}:
          </Typography>
          <Typography paragraph variant="body2">
            {seconds}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>{!loaded ? null : <Countdown date={targetDate} renderer={renderer} />}</>
  );
};

export default TimeCounter;
