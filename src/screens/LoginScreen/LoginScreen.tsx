import { Stack, Typography } from "@mui/material";
import {
  GoogleLogin,
  type GoogleCredentialResponse,
} from "@react-oauth/google";
import { googleLogin } from "../../libs/http-client";

export function LoginScreen() {
  const handleLoginSuccess = async (
    credentialResponse: GoogleCredentialResponse
  ) => {
    if (credentialResponse.credential) {
      const res = await googleLogin({ token: credentialResponse.credential });
      console.log(res);
    }
  };

  const handleLoginError = () => {
    console.log("구글 로그인에 실패했습니다.");
  };

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

          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
