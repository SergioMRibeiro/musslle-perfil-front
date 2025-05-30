const API_URL = process.env.NEXT_PUBLIC_MUSSLLE_PERFIL_API_URL


export const fetchFromMussllePerfilApi = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error! status: ${response.status}`);
  }
  return response;
};
