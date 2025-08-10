import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getUsers } from "../../libs/http-client";

export function LoginScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Stack
      css={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        css={{
          width: "400px",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={2}
          css={{
            width: "80%",
            border: "1px solid #e0e0e0",
            padding: "48px",
            borderRadius: "16px",
          }}
        >
          <Typography css={{ textAlign: "center" }}>Back Office</Typography>
          <TextField
            {...register("email")}
            placeholder="email"
            slotProps={{
              input: {
                startAdornment: <AccountCircleIcon />,
              },
            }}
          />
          <TextField
            {...register("password")}
            placeholder="password"
            type={isVisible ? "text" : "password"}
            slotProps={{
              input: {
                startAdornment: <HttpsIcon />,
                endAdornment: isVisible ? (
                  <IconButton onClick={() => setIsVisible(false)}>
                    <VisibilityOffIcon />
                  </IconButton>
                ) : (
                  <IconButton>
                    <VisibilityIcon onClick={() => setIsVisible(true)} />
                  </IconButton>
                ),
              },
            }}
          />

          <Button
            onClick={handleSubmit(async ({ email, password }) => {
              const res = await getUsers();
              console.log(res);
            })}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
