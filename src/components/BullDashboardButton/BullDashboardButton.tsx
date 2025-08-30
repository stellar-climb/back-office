import { Button } from '@mui/material';
import { useMutation } from '@libs';
import { bullDashboardRepository } from '@repositories';

export function BullDashboardButton() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const [getBullDashboard, { loading }] = useMutation(bullDashboardRepository.getBullDashboard, {
    onSuccess: ({ accessToken }) => {
      window.open(`${import.meta.env.VITE_CORE_API}/bull-dashboard?accessToken=${accessToken}`, '_blank');
    },
  });
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Button
      variant="contained"
      color="primary"
      loading={loading}
      onClick={() => {
        getBullDashboard({ variables: {} });
      }}
    >
      Bull
    </Button>
  );
}
