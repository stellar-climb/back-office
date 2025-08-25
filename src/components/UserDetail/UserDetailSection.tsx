import { userRepository } from '@repositories';
import { useQuery } from '@libs';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';

export function UserDetailSection(props: { userId: string }) {
  // 1. destructure props
  const { userId } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const { data: user, loading } = useQuery(userRepository.retrieve, {
    variables: { id: userId },
  });

  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return loading || !user ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <Stack spacing={8} css={{ padding: '24px', height: '100%' }}>
      {/* User의 기본 정보 */}
      <Stack css={{ width: '100%', height: '160px', borderRadius: '16px', border: '1px solid rgb(148, 139, 139)' }}>
        <Stack css={{ padding: '16px' }}>
          <Stack direction="row">
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* User의 활동 내역 */}
      <Stack
        direction="row"
        css={{
          width: '100%',
          height: '240px',
          borderRadius: '16px',
          border: '1px solid rgb(148, 139, 139)',
        }}
      >
        <Stack
          direction="row"
          css={{ width: '100%', padding: '16px', justifyContent: 'space-around', alignItems: 'center' }}
        >
          <Stack>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* 총 3개의 영역 (활동 영역) */}
      <Grid container spacing={8} css={{ height: '240px' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack css={{ width: '100%', height: '100%', borderRadius: '16px', border: '1px solid rgb(148, 139, 139)' }}>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          css={{ width: '100%', height: '100%', borderRadius: '16px', border: '1px solid rgb(148, 139, 139)' }}
        >
          <Stack>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          css={{ width: '100%', height: '100%', borderRadius: '16px', border: '1px solid rgb(148, 139, 139)' }}
        >
          <Stack>
            <Typography variant="h6">이름: {user.name}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
