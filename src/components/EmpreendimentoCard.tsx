import type { Empreendimento } from '../types/empreendimento'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Props {
  empreendimento: Empreendimento
  onRemover: (id: string) => void
}

export default function EmpreendimentoCard({ empreendimento, onRemover }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">{empreendimento.nome}</CardTitle>
        <Badge variant={empreendimento.status === 'ativo' ? 'default' : 'secondary'}>
          {empreendimento.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-1 text-sm text-slate-600">
        <p><span className="font-medium">Responsável:</span> {empreendimento.responsavel}</p>
        <p><span className="font-medium">Município:</span> {empreendimento.municipio}</p>
        <p><span className="font-medium">Segmento:</span> {empreendimento.segmento}</p>
        <p><span className="font-medium">Contato:</span> {empreendimento.contato}</p>
        <div className="flex gap-2 pt-3">
          <Link to={`/editar/${empreendimento.id}`}>
            <Button variant="outline" size="sm">
              <Pencil className="w-4 h-4 mr-1" />
              Editar
            </Button>
          </Link>
          <Button variant="destructive" size="sm" onClick={() => onRemover(empreendimento.id)}>
            <Trash2 className="w-4 h-4 mr-1" />
            Excluir
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}