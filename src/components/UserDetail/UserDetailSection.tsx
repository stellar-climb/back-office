import { userRepository } from '@repositories';
import { useQuery } from '@libs';
import { CircularProgress } from '@mui/material';

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
  return <div>{loading ? <CircularProgress /> : <div>{user?.name}</div>}</div>;
}
