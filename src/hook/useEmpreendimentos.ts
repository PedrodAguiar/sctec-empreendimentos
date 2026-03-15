import { useState, useEffect } from 'react'
import type { Empreendimento } from '../types/empreendimento'

const STORAGE_KEY = 'sctec_empreendimentos'

export function useEmpreendimentos() {
  const [empreendimentos, setEmpreendimentos] = useState<Empreendimento[]>(() => {
    const salvo = localStorage.getItem(STORAGE_KEY)
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(empreendimentos))
  }, [empreendimentos])

  function adicionar(dados: Omit<Empreendimento, 'id' | 'criadoEm'>) {
    const novo: Empreendimento = {
      ...dados,
      id: crypto.randomUUID(),
      criadoEm: new Date().toISOString(),
    }
    setEmpreendimentos(prev => [novo, ...prev])
  }

  function editar(id: string, dados: Omit<Empreendimento, 'id' | 'criadoEm'>) {
    setEmpreendimentos(prev =>
      prev.map(e => e.id === id ? { ...e, ...dados } : e)
    )
  }

  function remover(id: string) {
    setEmpreendimentos(prev => prev.filter(e => e.id !== id))
  }

  return { empreendimentos, adicionar, editar, remover }
}