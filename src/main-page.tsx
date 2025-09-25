import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "./routes/Routes";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <Button
        onClick={() => {
          navigate(routes.yupjscoockies.path);
        }}
        size="medium"
        variant="contained"
      >
        yup$jscookies
      </Button>
      <Button onClick={() => {
          navigate(routes.dnd.path);
        }} size="medium" variant="contained">
        drag and drop
      </Button>
      <Button size="medium" variant="contained" onClick={()=>{
                  navigate(routes.zustand.path);

      }}>
        zoostand mini project
      </Button>
            <Button size="medium" variant="contained" onClick={()=>{
                  navigate(routes.zustand2.path);

      }}>
        zoostand mini project2
      </Button>
      <Button
        onClick={() => {
          navigate(routes.taghvim.path);
        }}
        size="medium"
        variant="contained"
      >
        callender
      </Button>
    </Stack>
  );
}
