import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-4 mx-5 bg-gray-200 py-4 px-4 rounded-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Logo + Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Image
            src="/conecta.png"
            alt="Logo"
            width={200}
            height={39}
            className="mx-auto sm:mx-0"
          />
          <Tabs defaultValue="Esporte" className="bg-slate-100 rounded-md">
            <TabsList className="flex overflow-x-auto sm:overflow-visible p-1 rounded-md">
              <Link href="/">
                <TabsTrigger
                  className="px-4 py-2 whitespace-nowrap"
                  value="Esporte"
                >
                  Esporte
                </TabsTrigger>
              </Link>
              <Link href="#politica">
                <TabsTrigger
                  className="px-4 py-2 whitespace-nowrap"
                  value="Politica"
                >
                  Política
                </TabsTrigger>
              </Link>
              <Link href="/">
                <TabsTrigger
                  className="px-4 py-2 whitespace-nowrap"
                  value="Clima"
                >
                  Clima
                </TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>

        {/* Botão de Login */}
        <div className="flex justify-center lg:justify-end">
          <Link href="/login">
            <Button className="bg-black text-white w-full sm:w-auto">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
