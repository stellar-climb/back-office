import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export function Header() {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="fixed" css={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          <Typography variant="h6" css={{ color: '#000000' }}>
            Stellar Climb
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
