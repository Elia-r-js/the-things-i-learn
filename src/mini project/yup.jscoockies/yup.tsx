import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

export default function YupJsCookies() {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onsubmit = (data: any) => {
    console.log("fromdata", data);

    Cookies.set("uesrEmail", data.email, { expires: 7 });
    Cookies.set("authtoke", "fake-jwt-token", { expires: 7 });
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Stack
        spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100vh" }}
      >
        <TextField {...register("email")} placeholder="Email" />
        <Typography>{errors.email?.message}</Typography>
        <TextField {...register("password")} placeholder="Password" />
        <Typography>{errors.password?.message}</Typography>

        <Button variant="contained" type="submit">
          submit
        </Button>
      </Stack>
    </form>
  );
}
