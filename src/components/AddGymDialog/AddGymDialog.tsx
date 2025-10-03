import { Dialog, DialogActions, DialogContent, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { DialogTitleGroup } from '@components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const yupSchema = yup
  .object({
    name: yup.string().required(),
    address: yup.string().required(),
  })
  .required();

export function AddGymDialog(props: { onClose: () => void; onKeyDown: React.KeyboardEventHandler }) {
  // 1. destructure props
  const { onClose, onKeyDown } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      address: '',
    },
    resolver: yupResolver(yupSchema),
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers

  return (
    <Dialog open onKeyDown={onKeyDown}>
      <DialogTitleGroup onClose={onClose} title="암장 추가" />
      <DialogContent>
        <Stack spacing={8} css={{ marginTop: '24px', width: '480px' }}>
          <TextField required label="이름" {...register('name')} error={!!errors.name} />
          <TextField required label="주소" {...register('address')} error={!!errors.address} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!isValid || !isDirty}
          onClick={handleSubmit(async ({ name }) => {
            console.log(name);
          })}
        >
          <Typography>등록</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
