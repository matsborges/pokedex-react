# 🔴 Pokédex — Geração I

Uma Pokédex interativa da primeira geração, construída com foco em design, experiência de uso e fidelidade aos dados oficiais.

---

## ✨ Funcionalidades

- **Listagem completa** dos 151 Pokémon da Geração I com busca por nome ou número
- **Filtro por tipo** com todas as categorias disponíveis
- **Modal de detalhes** com stats, habilidades, altura, peso, locais de encontro e cadeia evolutiva
- **Efetividade de tipos** — seções "Fraco contra" e "Forte contra" calculadas via PokéAPI
- **Minha Pokédex** — marque os Pokémon que você capturou
- **Lista de Desejos** — salve os Pokémon que deseja capturar
- **Guia Pokémon Red** — detonado completo em português com todas as rotas, ginásios, itens secretos e lendários

---

## 🗂️ Estrutura de Navegação

```
Header
├── Todos           → listagem completa com busca e filtros
├── Minha Pokédex   → Pokémon capturados
├── Lista de Desejos → Pokémon marcados para capturar
└── Jogos ▾
    └── Pokémon Red → guia/detonado completo
```

---

## 🔌 API

O projeto consome a [PokéAPI](https://pokeapi.co/) — gratuita, sem autenticação.

**Endpoints utilizados:**

| Endpoint | Uso |
|----------|-----|
| `GET /api/v2/pokemon/{id}` | Dados do Pokémon (stats, tipos, sprites, habilidades) |
| `GET /api/v2/pokemon-species/{id}` | Cadeia evolutiva e descrições |
| `GET /api/v2/type/{name}` | Efetividade de tipos (damage_relations) |
| `GET /api/v2/evolution-chain/{id}` | Cadeia de evoluções |

**Lógica de efetividade de tipos:**
Para Pokémon com dois tipos (ex: Bulbasaur = Grass + Poison), os `damage_relations` de ambos os tipos são buscados e combinados — respeitando imunidades e resistências sobrepostas.

---

## 📁 Arquivos do Guia

| Arquivo | Descrição |
|---------|-----------|
| `pokemon-red-guide.js` | Dados do guia exportados como objeto JS (fonte de dados) |
| `pokemon-red-walkthrough.html` | Referência visual standalone do guia |

O guia cobre 18 seções: escolha do starter, todas as cidades e ginásios, Pokémon por rota, itens secretos, lendários, trocas in-game, glitches famosos e pós-jogo.

---

## 🛠️ Stack

- **Design:** Stitch → Figma
- **Build:** Cursor + Claude Code
- **Versionamento:** GitHub
- **Dados:** PokéAPI (REST)

---

## 🚧 Roadmap

- [ ] Pokémon Blue (guia)
- [ ] Pokémon Yellow (guia)
- [ ] Comparador de Pokémon
- [ ] Simulador de time com análise de cobertura de tipos
- [ ] Suporte a Geração II
