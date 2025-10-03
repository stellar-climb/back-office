import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        focused: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '8px 16px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        color: 'info',
      },
      styleOverrides: {
        root: {
          'color': '#000000',
          '$:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#000000',
          padding: '4px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0px 24px 24px 24px',
        },
      },
    },
  },
  spacing: 4,
});
