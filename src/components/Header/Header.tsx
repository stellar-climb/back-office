import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import { useSignOut, useUser } from '@libs';
import { Navigation } from '../Navigation';
import LogoutIcon from '@mui/icons-material/Logout';

export function Header() {
  // 1. destructure props
  // 2. lib hooks
  const [user] = useUser();
  const signOut = useSignOut();

  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        position="fixed"
        css={{ color: '#000000', backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
      >
        <Toolbar>
          <Stack direction="row" css={{ justifyContent: 'space-between', width: '100%' }}>
            <Stack spacing={16} direction="row" css={{ alignItems: 'center' }}>
              <Typography variant="h6" css={{ color: '#000000' }}>
                Stellar Climb
              </Typography>
              <Navigation />
            </Stack>

            <Stack spacing={4} direction="row" css={{ alignItems: 'center' }}>
              <Avatar
                src="https://via.placeholder.com/150"
                css={{ width: 32, height: 32, backgroundColor: '#000000', color: '#ffffff' }}
              />
              <Tooltip title={user.email}>
                <Typography
                  variant="body1"
                  css={{
                    color: '#000000',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: 100,
                  }}
                >
                  {user.email}
                </Typography>
              </Tooltip>
              <IconButton onClick={signOut}>
                <LogoutIcon css={{ color: '#000000' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
