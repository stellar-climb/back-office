import { Dialog, DialogActions, DialogContent, Stack } from '@mui/material';
import { Button } from '@mui/material';
import { DialogTitleGroup } from '@components';

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
      <DialogTitleGroup onClose={onClose} title="Gym 추가" />
      <DialogContent>
        <Stack>폼이 추가 될 예정</Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onClose}>추가</Button>
      </DialogActions>
    </Dialog>
  );
}
