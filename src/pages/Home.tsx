import EmpreendimentoCard from "../components/EmpreendimentoCard"
import Navbar from "../components/Navbar"
import { useEmpreendimentos } from "../hook/useEmpreendimentos"


export default function Home() {
  const { empreendimentos, remover } = useEmpreendimentos()

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Empreendimentos Cadastrados
        </h2>
        {empreendimentos.length === 0 ? (
          <p className="text-slate-500 text-center py-12">
            Nenhum empreendimento cadastrado ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {empreendimentos.map(e => (
              <EmpreendimentoCard key={e.id} empreendimento={e} onRemover={remover} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}