import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Stack, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function AddGymDialog(props: { onClose: () => void; onKeyDown: React.KeyboardEventHandler }) {
  // 1. destructure props
  const { onClose, onKeyDown } = props;
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers

  return (
    <Dialog open onKeyDown={onKeyDown}>
      <DialogTitle>
        <Stack direction="row" css={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography css={{ fontSize: '20px', fontWeight: 500 }}>Gym 추가</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>hi</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onClose}>추가</Button>
      </DialogActions>
    </Dialog>
  );
}
