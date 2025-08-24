import { Box, Stack, Typography, List, Chip, CircularProgress, Divider } from '@mui/material';
import { userRepository } from '@repositories';
import { useQuery } from '@libs';
import { useState } from 'react';
import { UserDetailSection } from '@components';

function RoleChip(props: { status: string }) {
  const { status } = props;
  return (
    <Chip
      label={status}
      css={{
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: status === 'active' ? 'rgba(42, 169, 97, 0.3)' : 'rgba(211, 47, 47, 0.3)',
      }}
    />
  );
}

export function UserScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  // 4. query hooks
  const { data, loading } = useQuery(userRepository.list);

  // 5. form hooks
  // 6. calculate values
  const users = data?.items || [];
  const total = data?.total || 0;

  // 7. effect hooks
  // 8. handlers
  return (
    <Stack direction="row">
      <Box css={{ width: '360px', height: '100vh', overflow: 'auto' }}>
        <List css={{ paddingRight: '8px' }}>
          <Stack spacing={2}>
            {loading ? (
              <Stack css={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
              </Stack>
            ) : (
              users &&
              users.map((user) => (
                <Stack
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  css={{
                    border: selectedUserId === user.id ? '2px solid #015dee' : '1px solid #000',
                    borderRadius: '8px',
                    padding: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                  }}
                >
                  <Stack direction="row" css={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography css={{ fontSize: '20px' }}>{user.name}</Typography>
                    <RoleChip status={user.status} />
                  </Stack>
                  <Typography css={{ fontSize: '12px' }}>{user.email}</Typography>
                </Stack>
              ))
            )}
          </Stack>
        </List>
      </Box>
      <Divider orientation="vertical" css={{ margin: '0 8px' }} />
      <Box css={{ flex: 1 }}>
        {selectedUserId ? (
          <UserDetailSection userId={selectedUserId} />
        ) : (
          <Stack css={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Typography css={{ fontSize: '20px' }}>선택된 사용자가 없습니다.</Typography>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
