import { Stack, Typography } from "@mui/material";

export function LoginScreen() {
  return (
    <Stack
      css={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        css={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Typography textAlign="center" variant="h1">
          Login
        </Typography>
      </Stack>
    </Stack>
  );
}
