import { httpClient } from '@libs';
import type { UserModel } from '../model';
import { queryKeyMap } from '@libs';

export const userRepository = {
  async list() {
    return httpClient.get<UserModel[]>('/users');
  },
};

queryKeyMap.set(userRepository.list, ['users']);
