interface NewsProps {
  title: string;
  image_url: string;
  description: string;
  pubDate: string;
  url: string; // Added url property
}

interface ApiResponse {
  results: NewsProps[];
}

export async function fetchNews(): Promise<NewsProps[]> {
  const response = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_ab422944d2ee456aba6cebae45520eaa&q=Futebol"
  );
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  const data: ApiResponse = await response.json();
  return data.results;
}
