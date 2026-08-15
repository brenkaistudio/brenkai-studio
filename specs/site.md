# specs/site.md — Fonte de verdade do escopo

Última atualização: 05/08/2026

Este arquivo define **o que** precisa ser construído. A aparência está em @specs/design.md. O histórico de decisões está em @memoria.md.

---

## 1. Objetivo do site

Estabelecer credibilidade para o Brenkai Studio: fazer com que um visitante que chegou por indicação, busca ou rede social conclua, em menos de um minuto, que o estúdio é competente e vale uma conversa.

**Métrica de sucesso primária:** envios do formulário de contato.
**Métricas secundárias:** tempo na página Work, taxa de rejeição na Home, cliques no CTA primário.

Não é um site de venda direta. Não há checkout, carrinho, preço público nem catálogo.

---

## 2. Público-alvo

**Primário:** donos de pequenas e médias empresas e fundadores de startups que precisam de um site novo ou de uma reconstrução, e que avaliam entre um freelancer, uma agência grande e um estúdio pequeno.

**Secundário:** designers, gerentes de marketing e parceiros que avaliam o estúdio para indicar ou subcontratar.

**O que essa pessoa está tentando saber, nesta ordem:**
1. O que vocês fazem, exatamente?
2. Já fizeram isso bem antes? (prova)
3. Como é trabalhar com vocês?
4. Como eu falo com vocês?

A arquitetura do site segue essa ordem: Home → Services → Work → About → Contact.

---

## 3. Produto e proposta de valor

**Produto:** dois serviços — sites institucionais/landing pages e design de interface (UI/UX). Nada além disso (D23).

**Equipe:** 3 pessoas — Kaique, Brian e Renato (D24). A copy usa **"we"**, não "I".

**Proposta de valor (a validar — ver Pendências):** um estúdio de três pessoas em que o cliente fala diretamente com quem projeta e programa, entregando sites rápidos e bem construídos, não apenas bonitos.

**Diferenciais a comunicar:**
- Contato direto com quem executa — sem intermediários.
- Desempenho tratado como requisito, não como acabamento.
- Código próprio, sem templates genéricos.
- Design e desenvolvimento sob o mesmo teto — não é só programar o que veio pronto.

> ⚠️ Nada aqui pode virar promessa de prazo, garantia ou número. **Não escrever "relação contínua após o lançamento"** enquanto manutenção não for um serviço oferecido.

> ⚠️ Nenhuma dessas afirmações pode ser acompanhada de número, prazo, garantia ou nome de cliente sem confirmação explícita. Ver a regra de conteúdo em @CLAUDE.md.

---

## 4. Idiomas

- **Inglês apenas.** `<html lang="en">`.
- Sem alternador de idioma, sem rotas por locale, sem biblioteca de i18n.
- A copy deve ser escrita em inglês direto e sem jargão. Evitar expressões idiomáticas difíceis de traduzir, para não travar uma futura versão em português.
- **Preparação futura:** sem build, uma versão pt-BR seria uma cópia dos 5 arquivos em `/pt/`, reaproveitando o mesmo CSS e JS. Para que isso funcione depois, o CSS não pode depender do comprimento do texto em inglês: nada de largura fixa em botão, título ou card. Não implementar i18n agora.

---

## 5. Quantidade de páginas

**5 páginas**, todas estáticas:

| Rota | Página | Papel |
|---|---|---|
| `/` | Home | Panorama e direcionamento |
| `/services` | Services | O que o estúdio faz |
| `/work` | Work | Prova |
| `/about` | About | Quem faz e como trabalha |
| `/contact` | Contact | Conversão |

Rotas de sistema (não contam como páginas de conteúdo): `404`, `/sitemap.xml`, `/robots.txt`.

---

## 6. Seções necessárias

### Globais (todas as páginas)
- **Header** — logotipo, navegação (Home, Services, Work, About, Contact), **alternador de tema** e botão `Start a project`. Fixo no topo, fundo com blur ao rolar. Indica a página ativa.
  - Alternador: `<button>` com ícone, `aria-pressed` e rótulo acessível. Fica à esquerda do CTA no desktop; dentro do menu em mobile.
- **Footer** — logotipo, descrição curta, navegação, e-mail de contato, **um único link social** e linha de copyright.
  - Social: apenas Instagram, `@brenkaistudio` → `https://instagram.com/brenkaistudio`, com `target="_blank"` e `rel="noopener noreferrer"`. Nenhuma outra rede (D30).
  - E-mail: `brenkaistudio@gmail.com`.

### `/` Home
1. **Hero** — título display em três linhas, subtítulo de uma frase, CTA primário `Start a project` + CTA secundário `See our work`, elemento visual abstrato à direita.
2. **Faixa de capacidades** — marquee horizontal com as disciplinas do estúdio.
3. **Manifesto** — 3 itens numerados (01–03) com título e parágrafo curto. É a resposta a "como vocês pensam".
4. **Selected work** — 2 a 3 projetos em destaque, com link `View all` para `/work`.
5. **Fechamento** — chamada final centralizada e CTA primário.

### `/services` Services
1. **Cabeçalho** — título display + subtítulo.
2. **Lista de disciplinas** — **2 linhas numeradas (01–02)**, cada uma com nome, descrição e link:
   - `01 — Websites & Landing Pages`
   - `02 — UI/UX Design`

   Como são só duas, cada linha recebe **tratamento ampliado**: título em `display-md`, descrição de 3–4 frases e uma lista de 3 a 4 entregáveis concretos. Duas linhas magras deixariam a página vazia; duas linhas densas funcionam.
3. **Como trabalhamos** — 4 etapas numeradas do processo, para dar corpo à página e responder "como é trabalhar com vocês". Compensa a lista curta de serviços.
4. **Stack** — marquee com as tecnologias usadas.
5. **Fechamento** — CTA.

> ⚠️ Não listar e-commerce, SEO ou manutenção contínua. O estúdio não entrega esses serviços hoje (D23). Só voltam à página quando você confirmar que entrega.

### `/work` Work
1. **Cabeçalho** — título display + subtítulo que declara honestamente a natureza dos casos exibidos.
2. **Grade de projetos** — layout assimétrico em duas colunas com deslocamento vertical. Cada card: imagem, nome, categoria, ano; ao passar o mouse, revela uma linha de descrição e as tecnologias.
3. **Fechamento** — CTA.

> ⚠️ Enquanto não houver projetos reais, cada card deve exibir um rótulo visível de demonstração e o subtítulo da página deve deixar isso explícito. Não apresentar demonstração como trabalho entregue a cliente.

### `/about` About
1. **Cabeçalho** — título display em três linhas.
2. **História** — 2 colunas: 3 parágrafos de texto à esquerda, elemento visual à direita. Sem citar ano de fundação (D35).
3. **Números** — 3 métricas curtas. **Construída por completo, porém comentada no HTML** (D29). Entra no ar quando o primeiro projeto real for entregue: basta descomentar e preencher. Nunca publicar com valor inventado nem com zero.
4. **Valores** — 4 cards com título e descrição curta.
5. **Fechamento** — CTA.

> ⚠️ **Sem seção de equipe** (D28). Nomes, funções e fotos ficam fora do site. A copy usa "we", mas nunca identifica ninguém.

### `/contact` Contact
1. **Cabeçalho** — título display + palavra decorativa gigante no fundo.
2. **Formulário** — Name*, Email*, Company (opcional), Project details*, botão `Send message`. Abaixo do botão, **aviso curto de privacidade** em `body-sm` `ink-300`, dizendo em uma frase o que é feito com os dados e que não há repasse a terceiros (D34).
3. **Card lateral** — e-mail direto, modo de operação e nota sobre atendimento pessoal. **Sem promessa de prazo de resposta** (D31): o compromisso é com resposta pessoal, não com hora marcada.

---

## 7. Funcionalidades

**Dentro do escopo:**
- Navegação entre páginas com transição suave e estado ativo.
- Menu mobile em tela cheia.
- **Alternador de tema claro/escuro** (D37), com preferência salva em `localStorage` e leitura de `prefers-color-scheme` na primeira visita. Script inline no `<head>` para evitar flash de tema errado — ver seção 13 de @specs/design.md.
- Formulário de contato com validação no cliente (campos obrigatórios, formato de e-mail), estados de carregando/sucesso/erro e proteção anti-spam por honeypot.
- Envio do formulário para um serviço externo (Web3Forms ou Formspree) via `fetch`, sem recarregar a página, com fallback: se o JS falhar, o `<form>` mantém `action` e `method="POST"` e envia normalmente. **Serviço e chave a definir** (ver Pendências).
- Marquees em CSS, com pausa ao passar o mouse e desativação em `prefers-reduced-motion`.
- Animações de entrada por scroll via `IntersectionObserver`.
- Meta tags por página, Open Graph, Twitter Card, `sitemap.xml` e `robots.txt` escritos à mão.
- JSON-LD do tipo `Organization` — **só com dados reais confirmados**.
- Página 404 no estilo do site.

**Fora do escopo (não construir sem nova decisão):** ver seção 13.

---

## 8. Chamadas para ação

**CTA primário — único no site:**
- Rótulo: `Start a project`
- Destino: `/contact`
- Onde aparece: header (todas as páginas), fim da Home, fim da Services, fim da Work, fim da About.

**CTA secundário:**
- Rótulo: `See our work` → `/work`. Só no hero da Home.

**Ações terciárias:**
- `View all` → `/work` (seção Selected work da Home)
- Link de e-mail no footer e no card da Contact
- `Send message` — botão de envio do formulário

**Regras:**
- Nunca dois CTAs primários visíveis na mesma dobra.
- O rótulo `Start a project` é fixo. Não criar variações ("Let's talk", "Get started", "Hire us") em botões primários.
- Todo CTA é um elemento nativo: `<a>` para navegação, `<button>` para ação.

---

## 9. Informações que ainda precisam ser definidas

Bloqueiam a redação final da copy. Espelhado em **Pendências** de @memoria.md.

| # | Item | Bloqueia | Estado |
|---|---|---|---|
| 1 | Textos finais de todas as seções | Todo o site | ✅ Eu escrevo o rascunho completo (D26) |
| 2 | Existem projetos reais utilizáveis? | `/work` | ✅ Não há. `/work` fica com tag `DEMO` (D22) |
| 3 | Números reais para a seção de métricas | Números da About | ✅ Seção comentada até o 1º projeto (D29) |
| 4 | Tamanho da equipe e ano de fundação | About | ✅ 3 pessoas (D24); ano não é citado (D35) |
| 5 | Funções de cada um | About | ✅ Sem seção de equipe (D28) |
| 6 | Perfis sociais | Footer | ✅ Só Instagram `@brenkaistudio` (D30) |
| 7 | E-mail de contato definitivo | Footer, Contact | ✅ `brenkaistudio@gmail.com` (D25) |
| 8 | Chave pública do Web3Forms | Contact | ✅ `5a1f5b7c-4b81-42f7-aa3e-ac6ec1987533` (D39) |
| 9 | Prazo de resposta no card da Contact | Contact | ✅ Sem promessa de prazo (D31) |
| 10 | Domínio e plataforma de deploy | SEO, Open Graph | ✅ Vercel ou Netlify, subdomínio gratuito (D32) |
| 11 | Logo recortada, com fundo transparente | Rodapé | ✅ Entregue e verificada (D38) |
| 15 | Favicon — o símbolo é ilegível a 16/32px | Aba do navegador | ⬜ Aberta, não bloqueante |
| 12 | Imagens para os cards de projeto | `/work` | ⚠️ `[PLACEHOLDER]` por enquanto (D33) |
| 13 | Serviços realmente oferecidos | `/services` | ✅ 2 serviços (D23) |
| 14 | Política de privacidade | Formulário | ✅ Aviso curto no formulário, sem página (D34) |

**Todas as pendências bloqueantes estão resolvidas.** Só o favicon (#15) segue aberto, e não impede nada.

### Nota sobre a logo (pendência 11 — resolvida)

**Arquivo definitivo:** `Logobrenkaisemfundo.png`, 1024×1024, `32bppArgb`. Destino no projeto: `assets/img/logo.png`.

Verificado antes de aceitar:
- 79,4% dos pixels totalmente transparentes; cantos com `A=0`.
- Dos pixels semitransparentes, 91% são sombra escura e apenas 1% são claros — **sem franja branca** do fundo original.
- Composto sobre `#0B0B0F` e `#F4F4F6` em 180, 120, 64 e 32px: funciona nos dois temas, sem halo.

**Regras de uso (D44):**
- **Header:** símbolo a **44px**, à esquerda da marca tipográfica `BRENKAI` + `studio`, com 12px de espaço entre os dois. O conjunto é um único link, com `aria-label` — a imagem leva `alt=""` para não duplicar o nome acessível.
- **Rodapé:** símbolo a **96px**.
- **Mínimo:** 44px quando acompanhado do nome; **64px se aparecer sozinho** (D40). Abaixo disso o `</>` central desaparece e as facetas viram ruído — por isso o favicon não usa o símbolo.
- Arquivo único de 192px serve os dois usos: 4,4× no header e 2× no rodapé.
- A imagem tem uma sombra suave embutida. É parte do arquivo, não uma sombra CSS — não conflita com a D13, e não adicionar `box-shadow` sobre ela.
- Descartados: `logobrenaki.png` (sem canal alfa) e `logobrenakai.svg` (traço automático, inutilizável).

---

## 10. Stack técnica

**Travada. Alterar exige autorização explícita — ver @CLAUDE.md.**

| Camada | Escolha | Por quê |
|---|---|---|
| Marcação | HTML5 semântico, 5 arquivos `.html` | Sem build, sem framework. Melhor SEO possível e código legível para aprender |
| Estilo | CSS puro — custom properties + BEM | Tokens de @specs/design.md em `:root`. Sem pré-processador |
| Comportamento | JavaScript ES6+ em módulos nativos (`type="module"`) | Sem bundler, sem transpilação |
| Fontes | `@font-face` self-hosted, subset latino, `font-display: swap` | Sem requisição externa; sem CLS |
| Ícones | SVG inline ou sprite próprio | Sem biblioteca |
| Animação | CSS + `IntersectionObserver` | Sem biblioteca de animação sem nova decisão |
| Formulário | `fetch` → Web3Forms ou Formspree, com fallback POST nativo | Serviço e chave pendentes (item 8) |
| Imagens | `<picture>` com AVIF/WebP, `width`/`height` explícitos, `loading="lazy"` | Otimização manual, sem pipeline |
| Deploy | Vercel ou Netlify, subdomínio gratuito (D32) | Basta subir os arquivos; sem domínio próprio por enquanto |

> ⚠️ Sem domínio definitivo, as meta tags Open Graph e o `canonical` exigem URL absoluta. Deixar como `[PLACEHOLDER: URL de produção]` e preencher no deploy. O `sitemap.xml` também depende disso.

**Estrutura de arquivos:**

```
/
├── index.html          services.html   work.html
├── about.html          contact.html    404.html
├── css/
│   ├── tokens.css      → custom properties: :root (escuro) + [data-theme="light"]
│   ├── base.css        → reset, tipografia base, utilitários
│   ├── layout.css      → container, grade, header, footer
│   ├── components.css  → botões, cards, campos, marquee, tags
│   └── pages.css       → ajustes específicos de página
├── js/
│   ├── theme.js        → alternador claro/escuro (+ script inline no <head>)
│   ├── nav.js          → menu mobile
│   ├── reveal.js       → animações de entrada (IntersectionObserver)
│   └── form.js         → validação e envio do formulário
├── assets/
│   ├── fonts/  img/  icons/
├── sitemap.xml   robots.txt
```

**Regras de implementação:**
- **Nenhuma dependência externa.** Sem npm, sem CDN, sem bibliotecas. Tudo servido do próprio projeto.
- **Nenhum valor solto no CSS.** Sempre `var(--token)`. Se um valor não existe em `tokens.css`, ele precisa ser adicionado lá primeiro.
- **Nomenclatura BEM:** `.bloco`, `.bloco__elemento`, `.bloco--modificador`.
- Sem `style=""` inline, exceto o `--index` de cascata em animações.
- Sem `!important`.
- Header e footer duplicados nos 5 arquivos, por decisão. Ao alterar qualquer um dos dois, atualizar os 5 e conferir um por um. Nunca injetar via JS.
- JS é progressivo: com JS desativado, todas as páginas continuam legíveis e navegáveis, o formulário envia por POST nativo e o site carrega no tema escuro — só o alternador some.
- O script inline de tema no `<head>` é a **única** exceção à regra de manter JS no fim do `<body>`. Existe para evitar flash de tema errado e não pode ser movido.
- Sem dependência nova sem justificativa e aprovação.

---

## 11. Regras de responsividade

**Breakpoints (mobile-first, escritos como `@media (min-width: …)`):**

| Nome | Largura | Uso |
|---|---|---|
| base | 0–639 | Celular. Uma coluna. |
| `sm` | 640 | Celular grande |
| `md` | 768 | Tablet. Grades de 2 colunas. |
| `lg` | 1024 | Desktop. Layout completo. |
| `xl` | 1280 | Desktop grande |
| `2xl` | 1536 | Largura máxima do conteúdo |

**Regras:**
- Mobile-first. Escrever o estilo base para celular e ampliar.
- Largura máxima do conteúdo: 1440px, centralizado. Faixas de fundo ocupam a largura total.
- Padding lateral: 20px (base) → 40px (`md`) → 80px (`lg`).
- Nada de scroll horizontal em nenhuma largura entre 320px e 2560px. Marquees ficam contidos em `overflow: hidden`.
- Layouts de 2 colunas viram 1 coluna abaixo de `md`, com a coluna de texto primeiro.
- A grade assimétrica da `/work` vira uma pilha simples abaixo de `md`.
- Navegação vira menu em tela cheia abaixo de `lg`.
- Tipografia display usa `clamp()` — sem saltos entre breakpoints.
- Alvos de toque: mínimo 44×44px.
- Nenhum conteúdo depende de `:hover` para ser acessível; toda informação revelada no hover também é visível ou acessível em toque.

---

## 12. Requisitos de acessibilidade

**Meta: WCAG 2.1 nível AA.**

- Contraste ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande (≥24px ou ≥19px bold) e para componentes de interface. Os pares aprovados estão em @specs/design.md — usar apenas eles. **Verificar nos dois temas**: as tabelas de contraste do tema escuro e do tema claro são independentes e nenhuma cor serve para os dois.
- O alternador de tema é um `<button>` alcançável por teclado, com `aria-pressed` refletindo o estado e rótulo acessível que diz para qual tema a ação leva.
- Um único `<h1>` por página; hierarquia de títulos sem pular níveis.
- HTML semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Todo elemento interativo alcançável por teclado, em ordem lógica, com indicador de foco visível (contorno de 2px, offset de 2px, cor de foco definida em design.md). Nunca `outline: none` sem substituto.
- Link "Skip to content" como primeiro elemento focável.
- Imagens com `alt` descritivo; imagens decorativas com `alt=""`.
- Formulário: `<label>` visível associado a cada campo, campos obrigatórios marcados no texto do label e via `aria-required`, erros ligados por `aria-describedby` e anunciados em `aria-live="polite"`. Erro nunca comunicado só por cor.
- `prefers-reduced-motion: reduce` desativa marquees, parallax e animações de entrada; o conteúdo aparece em seu estado final.
- Sem texto dentro de imagem.
- Verificar com teclado, com leitor de tela e com zoom de 200%.

---

## 13. Requisitos de desempenho

**Metas em Lighthouse mobile (throttling padrão):**

| Métrica | Meta |
|---|---|
| Performance | ≥ 95 |
| Accessibility | 100 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS total (não comprimido) | **< 18 KB por página** |
| CSS total (não comprimido) | < 45 KB |

O orçamento subiu de 15 KB para 18 KB de JS e de 40 KB para 45 KB de CSS por causa do alternador de tema e do segundo conjunto de tokens (D37).

**Regras:**
- HTML estático puro — não há etapa de build.
- Fontes self-hosted em `assets/fonts/`, formato `.woff2`, subset latino, `font-display: swap`. Apenas os pesos usados na primeira dobra levam `<link rel="preload">`.
- Imagens em AVIF com fallback WebP via `<picture>`, `width` e `height` sempre explícitos, `fetchpriority="high"` só no LCP da Home, `loading="lazy"` em todo o resto.
- CSS carregado em `<head>`; JS sempre com `type="module"` (adiado por padrão) no fim do `<body>`.
- Sem script de terceiros na primeira dobra. Analytics (se houver) carregado de forma diferida.
- Animações apenas em `transform` e `opacity`.
- Orçamento de peso da primeira dobra: < 500 KB.

---

## 14. Dentro e fora do escopo

### Dentro
- 5 páginas estáticas, em inglês
- Header e footer responsivos, menu mobile
- Formulário de contato com validação, honeypot e envio para serviço externo, com fallback sem JS
- Marquees, animações de entrada, hover nos cards
- SEO por página, Open Graph, sitemap, robots
- Página 404
- Acessibilidade AA e metas de desempenho acima

### Fora — não construir sem nova decisão registrada
- Segunda língua, alternador de idioma, i18n
- Blog, CMS, área administrativa
- E-commerce, checkout, preços, carrinho
- Login, contas, área do cliente
- Páginas de caso detalhadas (`/work/[slug]`)
- Depoimentos, logotipos de clientes, selos de prêmio
- Newsletter, pop-ups, chat ao vivo, banner de cookies
- Um terceiro tema, ou temas por página (só existem claro e escuro)
- Animações com WebGL, three.js ou biblioteca de scroll
- Ilustrações ou fotografia sob medida
- Analytics, testes A/B, mapas de calor
- Redação profissional de copy, tradução, SEO de conteúdo
- Compra de domínio, e-mail corporativo, configuração de DNS
