import { useEmpreendimentos } from '../hook/useEmpreendimentos'
import EmpreendimentoCard from '../components/EmpreendimentoCard'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Plus, Building2 } from 'lucide-react'

export default function Home() {
  const { empreendimentos, remover } = useEmpreendimentos()

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#00ED64' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#00ED64' }}>
                Santa Catarina
              </span>
            </div>
            <h2 className="text-4xl font-bold" style={{ color: '#E8EDEB' }}>
              Empreendimentos{' '}
              <span style={{ color: '#00ED64' }}>Cadastrados</span>
            </h2>
            <p className="mt-2 text-sm" style={{ color: '#E8EDEB', opacity: 0.5 }}>
              {empreendimentos.length === 0
                ? 'Nenhum empreendimento cadastrado ainda.'
                : `${empreendimentos.length} empreendimento${empreendimentos.length > 1 ? 's' : ''} encontrado${empreendimentos.length > 1 ? 's' : ''}.`}
            </p>
          </div>
        </div>

        {/* Empty State */}
        {empreendimentos.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 rounded-2xl border"
            style={{ borderColor: '#00684A33', backgroundColor: '#0D253599', backdropFilter: 'blur(12px)' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: '#00684A22' }}
            >
              <Building2 className="w-8 h-8" style={{ color: '#00ED64' }} />
            </div>
            <p className="text-lg font-semibold mb-1" style={{ color: '#E8EDEB' }}>
              Nenhum empreendimento cadastrado
            </p>
            <p className="text-sm mb-6" style={{ color: '#E8EDEB', opacity: 0.5 }}>
              Comece adicionando o primeiro empreendimento catarinense.
            </p>
            <Link to="/novo">
              <Button style={{ backgroundColor: '#00ED64', color: '#001E2B' }}>
                <Plus className="w-4 h-4 mr-2" />
                Cadastrar agora
              </Button>
            </Link>
          </div>
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