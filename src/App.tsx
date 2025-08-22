import { ThemeProvider } from "@mui/material";
import { AppRouter } from "@routes";
import { theme } from "@libs";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AppRouter />
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
