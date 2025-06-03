"use client";

import { useEffect, useState } from "react";
import { fetchNews } from "@/app/api/newsPolitica";
import NewsCard from "./NewsCard";
import Tema from "./Tema";
import { NewsProps } from '../app/api/newsApi';
import NewsModal from "./NewsModal";


export default function NewsEsporte() {
   const [news, setNews] = useState<NewsProps[]>([]);
   const [loading, setLoading] = useState(true);
   const [selectedArticle, setSelectedArticle] = useState<NewsProps | null>(null); // para o modal
 
   useEffect(() => {
     const loadNews = async () => {
       try {
         const data = await fetchNews();
         setNews(data);
       } catch (error) {
         console.error("Erro ao buscar notícias:", error);
       } finally {
         setLoading(false);
       }
     };
 
     loadNews();
   }, []);
 
   return (
     <div id="politica" className="p-4">
       <Tema titleTema="Política" />
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {loading ? (
           <p className="col-span-full text-center text-gray-500">Carregando...</p>
         ) : news.length > 0 ? (
           news.map((artigo, index) => (
             <NewsCard
               key={index}
               {...artigo}
               onClick={() => setSelectedArticle(artigo)} // Mostra o modal
             />
           ))
         ) : (
           <p className="col-span-full text-center text-gray-600">
             Nenhuma notícia de esporte encontrada.
           </p>
         )}
       </div>
 
       {/* Modal exibido se houver artigo selecionado */}
       {selectedArticle && (
         <NewsModal
           article={selectedArticle}
           onClose={() => setSelectedArticle(null)}
         />
       )}
     </div>
   );
 }