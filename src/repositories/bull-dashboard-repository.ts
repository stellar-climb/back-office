import { httpClient, queryKeyMap } from '@libs';

export const bullDashboardRepository = {
  async getBullDashboard() {
    return httpClient.get<{ accessToken: string }>('/auth/bull-dashboard');
  },
};

queryKeyMap.set(bullDashboardRepository.getBullDashboard, ['bullDashboard']);
