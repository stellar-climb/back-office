import { Button, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddGymDialog, DialogButton, Pagination } from '@components';
import { useMemo, useState } from 'react';
import { gymRepository } from '@repositories';
import { useQuery } from '@libs';

export function GymScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  // 4. query hooks
  const { data: gyms, loading } = useQuery(gymRepository.list);

  // 5. form hooks
  // 6. calculate values
  const gymItems = gyms?.items || [];
  const totalCount = gyms?.total || 0;

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Name', width: 100 },
      { field: 'address', headerName: 'Address', width: 100 },
    ];
  }, []);

  // 7. effect hooks
  // 8. handlers
  return (
    <Stack css={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <DialogButton
        render={({ onOpen }) => {
          return (
            <Button onClick={onOpen}>
              <Typography>+ ADD</Typography>
            </Button>
          );
        }}
        css={{ marginLeft: 'auto' }}
      >
        {({ onClose, onKeyDown }) => <AddGymDialog onClose={onClose} onKeyDown={onKeyDown} />}
      </DialogButton>

      <Stack css={{ padding: '24px', width: '100%', height: 'calc(100% - 360px)' }}>
        <DataGrid rows={gymItems} columns={columns} hideFooter loading={loading} />
      </Stack>
      <Pagination page={page} limit={limit} totalCount={totalCount} onChange={setPage} onLimitChange={setLimit} />
    </Stack>
  );
}
