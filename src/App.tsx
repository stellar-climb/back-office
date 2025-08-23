import { ThemeProvider } from '@mui/material';
import { AppRouter } from '@routes';
import { AuthProvider, theme } from '@libs';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AppRouter />
        </GoogleOAuthProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
