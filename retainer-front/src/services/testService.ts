import apiClient from './api';

export const testService = {
  // GET 요청 테스트
  getHello: async (): Promise<{message: string}> => {
    const response = await apiClient.get('/hello');
    return response.data;
  },

  // POST 요청 테스트
  postEcho: async (data: { test: string; from: string }): Promise<string> => {
    const response = await apiClient.post('/echo', data);
    return response.data;
  },
};