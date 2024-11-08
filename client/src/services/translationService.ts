import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchTranslations = async (lang: string, keys: string[]) => {
  const response = await axios.get(`${API_URL}/translations`, {
    params: {
      lang,
      keys: keys.join(","),
    },
  });

  return response.data;
};
