"use client";

import React from "react";
import { NewsProps } from "@/app/api/newsApi";

interface NewsModalProps {
  article: NewsProps;
  onClose: () => void;
}

export default function NewsModal({ article, onClose }: NewsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative overflow-hidden animate-fadeIn">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold z-10"
        >
          ×
        </button>

        {/* Imagem */}
        {article.image_url ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-medium rounded-t-2xl">
            Imagem não disponível
          </div>
        )}

        {/* Conteúdo */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{article.pubDate}</p>
          <p className="text-gray-700 whitespace-pre-line">{article.description}</p>

          {/* Botão "Leia mais" */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Leia mais
          </a>
        </div>
      </div>
    </div>
  );
}
