export type Segmento =
  | 'Tecnologia'
  | 'Comércio'
  | 'Indústria'
  | 'Serviços'
  | 'Agronegócio'

export type Status = 'ativo' | 'inativo'

export interface Empreendimento {
  id: string
  nome: string
  responsavel: string
  municipio: string
  segmento: Segmento
  contato: string
  status: Status
  criadoEm: string
}