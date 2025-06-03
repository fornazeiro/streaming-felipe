"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/app/api/newsSlider";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsProps } from "@/app/api/newsApi";

export default function NewsSlider() {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Erro ao carregar notícias do slider:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500">Carregando notícias do slider...</p>
    );
  }

  return (
    <div className="w-full mx-auto p-4">
      {news.length > 0 ? (
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent>
            {news.map((artigo, index) => (
              <CarouselItem
                key={artigo.url || index}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col items-center p-2">
                  {artigo.image_url ? (
                    <img
                      src={artigo.image_url}
                      alt={artigo.title || "Notícia"}
                      className="h-40 w-full object-cover rounded-md shadow-md"
                    />
                  ) : (
                    <div className="h-40 w-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                      Imagem não disponível
                    </div>
                  )}
                  <h3 className="text-md font-semibold mt-2 text-center line-clamp-2">
                    {artigo.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      ) : (
        <p className="col-span-full text-center text-gray-600">
          Nenhuma notícia encontrada para o slider.
        </p>
      )}
    </div>
  );
}
