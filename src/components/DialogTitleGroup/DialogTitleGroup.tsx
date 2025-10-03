import { DialogTitle, Stack, Typography, IconButton } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CloseIcon from '@mui/icons-material/Close';

export function DialogTitleGroup(props: { onClose: () => void; title: string }) {
  // 1. destructure props
  const { onClose, title } = props;
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers

  return (
    <DialogTitle>
      <Stack direction="row" css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Stack spacing={3} direction="row" css={{ alignItems: 'center' }}>
          <FitnessCenterIcon />
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
  );
}
