// components/NewsCard.tsx
import { CalendarDays } from "lucide-react"; // Make sure lucide-react is installed

interface NewsCardProps {
  title: string;
  image_url?: string; // Optional, as it might not always be present
  description?: string; // Optional
  pubDate?: string; // Optional
  url?: string;
  onClick?: () => void
}

export default function NewsCard({
  title,
  image_url,
  description,
  pubDate,
  url,
  onClick,
}: NewsCardProps) {
  const formattedDate = pubDate
    ? new Date(pubDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo", // Specify timezone for consistency
      })
    : "Data desconhecida";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col hover:cursor-pointer" onClick={onClick}>
      {image_url ? (
        <img
          src={image_url}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-2"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-2 flex items-center justify-center text-gray-500">
          Sem Imagem
        </div>
      )}
      <h2 className="text-md font-semibold text-gray-800 mb-1 line-clamp-2">
        {title}
      </h2>
      <p className="text-sm text-gray-600 flex-grow line-clamp-3">
        {description || "Sem descrição disponível."}
      </p>
      <p className="text-xs text-gray-500 mt-2 flex items-center">
        <CalendarDays className="mr-2" width={16} height={16} /> {formattedDate}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 text-sm"
        >
          Ler mais
        </a>
      )}
    </div>
  );
}
