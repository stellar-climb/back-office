import { Button, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddGymDialog, DialogButton, Pagination } from '@components';
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
      <DialogButton
        render={({ onOpen }) => {
          return <Button onClick={onOpen}>추가</Button>;
        }}
      >
        {({ onClose, onKeyDown }) => <AddGymDialog onClose={onClose} onKeyDown={onKeyDown} />}
      </DialogButton>
      <Stack css={{ padding: '24px', width: '100%', height: 'calc(100% - 360px)' }}>
        <DataGrid rows={[]} columns={[]} hideFooter />
      </Stack>
      <Pagination page={page} limit={10} totalCount={98} onChange={setPage} />
    </Stack>
  );
}
