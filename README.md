# SC Empreendimentos

> Plataforma de gerenciamento de empreendimentos catarinenses desenvolvida para o processo seletivo da trilha **IA para DEVs** do programa SCTEC.

---

## 📋 Descrição

O **SC Empreendimentos** é uma aplicação web do tipo CRUD (Create, Read, Update, Delete) voltada ao cadastro e gerenciamento de empreendimentos do estado de Santa Catarina. A solução permite registrar informações sobre empresas e seus responsáveis, facilitando a organização e consulta desses dados de forma estruturada.

---

## 🚀 Tecnologias Utilizadas

- **React 18** — biblioteca para construção de interfaces
- **TypeScript** — tipagem estática para maior qualidade e segurança do código
- **Vite 6** — bundler e servidor de desenvolvimento
- **Tailwind CSS 3** — estilização utilitária
- **Shadcn/ui** — componentes de interface acessíveis e customizáveis
- **React Router DOM** — navegação entre páginas
- **React Hook Form** — gerenciamento de formulários
- **Zod** — validação de dados
- **LocalStorage** — persistência de dados no navegador

---

## 🗂️ Estrutura do Projeto
```
src/
├── components/
│   ├── ui/               # Componentes do Shadcn
│   ├── EmpreendimentoCard.tsx
│   └── Navbar.tsx
├── hook/
│   └── useEmpreendimentos.ts
├── pages/
│   ├── Home.tsx
│   └── Formulario.tsx
├── routes.tsx
├── types/
│   └── empreendimento.ts
└── main.tsx
```

---

## ⚙️ Funcionalidades

- ✅ Cadastro de novos empreendimentos
- ✅ Listagem de empreendimentos cadastrados
- ✅ Edição de informações cadastradas
- ✅ Remoção de registros
- ✅ Validação de formulário com Zod
- ✅ Persistência de dados com LocalStorage
- ✅ Interface responsiva para mobile e desktop

---

## 📦 Campos Gerenciados

| Campo | Descrição |
|---|---|
| Nome | Nome do empreendimento |
| Responsável | Nome do(a) responsável |
| Município | Cidade de Santa Catarina |
| Segmento | Tecnologia, Comércio, Indústria, Serviços ou Agronegócio |
| Contato | E-mail ou telefone |
| Status | Ativo ou Inativo |

---

## 🖥️ Como Executar

**Pré-requisitos:** Node.js 18+ e npm instalados.
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sctec-empreendimentos.git

# Acesse a pasta
cd sctec-empreendimentos

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 🎥 Vídeo Pitch

[Assistir no YouTube](https://youtu.be/bFFvO-nk618)

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Daniel** para o processo seletivo SCTEC — IA para DEVs.