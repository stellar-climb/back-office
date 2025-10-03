import { Dialog, DialogActions, DialogContent, Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { DialogTitleGroup } from '@components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@libs';
import { gymRepository } from '@repositories';
import { useSnackbar } from 'notistack';

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
  const { enqueueSnackbar } = useSnackbar();
  // 3. state hooks
  // 4. query hooks
  const [registerGym, { loading }] = useMutation(gymRepository.register, {
    onSuccess: () => {
      enqueueSnackbar('Success! 🚀', { variant: 'success' });
      onClose();
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    },
  });
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
          loading={loading}
          disabled={!isValid || !isDirty}
          onClick={handleSubmit(async ({ name, address }) => {
            await registerGym({ variables: { name, address } });
          })}
        >
          <Typography>등록</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
