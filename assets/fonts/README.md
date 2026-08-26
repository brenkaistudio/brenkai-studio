# Fontes locais

O projeto usa fontes variáveis self-hosted em WOFF2. Não há CDN nem dependência externa em produção.

| Arquivo | Papel | Faixa disponível |
|---|---|---|
| `space-grotesk-variable.woff2` | Display — títulos e marca tipográfica | 300–700 |
| `inter-variable.woff2` | Corpo — parágrafos, labels e navegação | 100–900 |
| `jetbrains-mono-variable.woff2` | Acento — kickers, metadados e tags | 100–800 |

Os arquivos usam o subset latino fornecido pelo Google Fonts e são carregados por `css/base.css`. A combinação oficial foi aprovada na D53 de `memoria.md`.
