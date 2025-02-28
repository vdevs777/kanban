import { ArrowLeft } from "lucide-react"; // Usar um ícone de seta para a esquerda para voltar
import Link from "next/link";

export default function Page404() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-6 p-4 bg-gray-100">
      <h1 className="font-black text-5xl text-gray-800 mb-4 animate-pulse">
        Ops! Página não encontrada.
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Desculpe, mas a página que você está procurando não existe ou foi
        movida.
      </p>
      <Link
        href="/clientes/list"
        className="text-xl text-primary hover:text-blue-400 transition-all flex items-center gap-2 mt-8 bg-white py-2 px-4 rounded-md shadow-md hover:shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar para home
      </Link>
    </div>
  );
}
