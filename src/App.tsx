import { ThemeProvider } from '@mui/material';
import { AppRouter } from '@routes';
import { AuthProvider, theme } from '@libs';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { queryClient } from '@libs';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </ThemeProvider>
        </GoogleOAuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
