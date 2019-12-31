export type ApiResponse = [Partial<Response>, boolean];

const fetchRequest = (url: string): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          status: 200,
          payload: {
            message: "success"
          }
        } as Partial<Response>,
        false
      ]);
    }, 2000);
  });
};

export const useApi = (apiUrl: string) => {
  const apiRequest = async () => await fetchRequest(apiUrl);

  return {
    apiRequest
  };
};
