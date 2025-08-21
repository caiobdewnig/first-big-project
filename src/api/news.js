import nytApi from "./nyt";

export async function getMostPopular(period = 7) {
  try {
    const response = await nytApi.get(`/mostpopular/v2/viewed/${period}.json`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return null;
  }
}
