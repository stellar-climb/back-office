import { httpClient } from '@libs';
import type { GymModel } from '../model';
import { queryKeyMap } from '@libs';

export const gymRepository = {
  async register({ name, address }: { name: string; address: string }) {
    return httpClient.post<void>('/gyms', { name, address });
  },

  async list({ page, limit }: { page: number; limit: number }) {
    return httpClient.get<{ items: GymModel[]; total: number }>('/gyms', {
      params: {
        page,
        limit,
      },
    });
  },

  async retrieve({ id }: { id: string }) {
    return httpClient.get<GymModel>(`/gyms/${id}`);
  },
};

queryKeyMap.set(gymRepository.register, ['Gym']);
queryKeyMap.set(gymRepository.list, ['Gym']);
queryKeyMap.set(gymRepository.retrieve, ['Gym']);
