import { Button, Stack, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { AddGymDialog, DialogButton, ListViewHeader, Pagination } from '@components';
import { useMemo, useState } from 'react';
import { gymRepository } from '@repositories';
import { useQuery } from '@libs';
import { GymModel } from '@models';

export function GymScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [search, setSearch] = useState<{ key: string; value: string }>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  // 4. query hooks
  const { data: gyms, loading } = useQuery(gymRepository.list, {
    variables: {
      page,
      limit,
      filter: search && search.value ? { search: search.key, searchValue: search.value } : {},
    },
  });

  // 5. form hooks
  // 6. calculate values
  const gymItems = gyms?.items || [];
  const totalCount = gyms?.total || 0;

  const columns = useMemo<GridColDef<GymModel>[]>(() => {
    return [
      { field: 'id', headerName: 'ID', width: 100, maxWidth: 100 },
      { field: 'name', headerName: '이름', width: 100, flex: 1 },
      { field: 'address', headerName: '주소', width: 100, flex: 1 },
    ];
  }, []);

  // 7. effect hooks
  // 8. handlers
  return (
    <Stack css={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <Stack css={{ width: '100%', justifyContent: 'flex-start' }}>
        <Typography css={{ fontSize: '32px', fontWeight: 'bold' }}>암장 목록</Typography>
      </Stack>
      <Stack spacing={2} direction="row" css={{ alignItems: 'center' }}>
        <ListViewHeader
          searchItems={[
            { searchKey: 'name', label: '이름' },
            { searchKey: 'address', label: '주소' },
          ]}
          onSearch={({ searchKey, searchValue }) => {
            setPage(1);
            setSearch({ key: searchKey, value: searchValue });
          }}
        />
        <DialogButton
          render={({ onOpen }) => {
            return (
              <Button onClick={onOpen} css={{ width: '80px' }}>
                <Typography>+ ADD</Typography>
              </Button>
            );
          }}
        >
          {({ onClose, onKeyDown }) => <AddGymDialog onClose={onClose} onKeyDown={onKeyDown} />}
        </DialogButton>
      </Stack>

      <Stack css={{ padding: '24px', width: '100%', height: '920px' }}>
        <DataGrid rows={gymItems} columns={columns} hideFooter loading={loading} checkboxSelection />
        <Typography css={{ fontSize: '16px', marginTop: '4px' }}>
          총합: <span css={{ fontWeight: 'bold' }}>{totalCount}</span>
        </Typography>
      </Stack>
      <Pagination page={page} limit={limit} totalCount={totalCount} onChange={setPage} onLimitChange={setLimit} />
    </Stack>
  );
}
