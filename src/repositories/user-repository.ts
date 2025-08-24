import { httpClient } from '@libs';
import type { UserModel } from '../model';
import { queryKeyMap } from '@libs';

export const userRepository = {
  async list() {
    return httpClient.get<{ items: UserModel[]; total: number }>('/users');
  },

  async retrieve({ id }: { id: string }) {
    return httpClient.get<UserModel>(`/users/${id}`);
  },
};

queryKeyMap.set(userRepository.list, ['User']);
queryKeyMap.set(userRepository.retrieve, ['User']);
