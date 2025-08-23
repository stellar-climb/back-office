import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginScreen } from '@screens';
import { useUser } from '@libs';
import { Stack, Toolbar } from '@mui/material';
import { Header } from '../components';

function AuthorizedRoute() {
  // 1. destructure props
  // 2. lib hooks
  const [user] = useUser();

  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return user ? (
    <Stack css={{ width: '100%', padding: '0 16px' }}>
      <Header />
      <Stack css={{ flexGrow: 1, marginTop: '16px' }}>
        <Toolbar />
        <Outlet />
      </Stack>
    </Stack>
  ) : (
    <Navigate to="/sign-in" />
  );
}

function UnAuthorizedRoute() {
  // 1. destructure props
  // 2. lib hooks
  const [user] = useUser();

  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return user ? <Navigate to="/" /> : <Outlet />;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthorizedRoute />}>
          <Route path="/" element={<div>Dashboard</div>} />
        </Route>

        <Route element={<UnAuthorizedRoute />}>
          <Route path="/sign-in" element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
