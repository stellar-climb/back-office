import { Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Pagination } from '@components';
import { useState } from 'react';

export function GymScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [page, setPage] = useState(1);

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Stack css={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <Stack css={{ padding: '24px', width: '100%', height: 'calc(100% - 360px)' }}>
        <DataGrid rows={[]} columns={[]} hideFooter />
      </Stack>
      <Pagination page={page} limit={10} totalCount={98} onChange={setPage} />
    </Stack>
  );
}
