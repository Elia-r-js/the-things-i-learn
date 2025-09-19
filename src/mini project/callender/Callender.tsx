import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import jalaliPlugin from "jalali-plugin-dayjs";

export default function Callender() {
  dayjs.extend(jalaliPlugin);

 
    const gregorianDate = dayjs().format("YYYY-MM-DD");
    const jalaliDate = dayjs().calendar("jalali").format("YYYY-MM-DD");//we have to use capital
    return (
      <Stack
      spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh" }}
      >
        <Typography variant="h1">امروز </Typography>
        <Typography variant="h4">هست {jalaliDate}</Typography>
        <Typography variant="h1">today is </Typography>
        <Typography variant="h4"> {gregorianDate}</Typography>
      </Stack>
    );
  };

