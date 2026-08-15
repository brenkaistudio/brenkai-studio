# specs/design.md — Fonte de verdade visual

Última atualização: 05/08/2026

Este arquivo define **como o site deve parecer**. O escopo está em @specs/site.md. O histórico está em @memoria.md.
Nenhum valor de cor, tamanho, espaçamento ou raio deve existir no código fora dos tokens definidos aqui.

---

## 0. Sobre a referência analisada

`Ideiasbrenkai/` contém 4 screenshots de página inteira (Home, Services, Work, About, Contact) e um arquivo com o link de um site anterior do Brenkai Studio.

**O que foi extraído — estrutura e atmosfera:**
- Fundo escuro contínuo, sem seções claras alternadas.
- Título display gigante em caixa alta, quebrado em 3 linhas, com **uma única palavra** recebendo tratamento colorido.
- Kicker curto em letterspacing largo acima de cada título de seção, precedido por um traço.
- Marquee horizontal em texto grande cruzando a página inteira como separador entre seções.
- Listas numeradas (01, 02, 03…) como forma dominante de organizar conteúdo.
- Grade de projetos assimétrica, com colunas deslocadas verticalmente.
- Respiro vertical muito generoso entre seções.
- Fechamento de página sempre com uma chamada centralizada e um único botão.

**O que foi deliberadamente descartado, para que a identidade seja original do Brenkai Studio:**

| Elemento da referência | Decisão do projeto |
|---|---|
| Gradiente ciano → azul → magenta | Substituído pela **paleta da própria logo do Brenkai: azul → violeta → roxo**, em versões clareadas para passar em contraste (D20) |
| Botões em formato pílula (raio total) | **Mantidos** — decisão do cliente (D36). A originalidade fica por conta da paleta e do gesto monoespaçado |
| Acento em fonte manuscrita ("your move", "crafted, not templated") | Substituído por **acento em monoespaçada** — é o gesto próprio do estúdio |
| Logotipo, nome de projetos, textos, imagens | Nada reaproveitado |
| Cards com brilho colorido difuso | Substituídos por **borda de 1px com realce no hover**, sem brilho |

Não copie textos, logotipo, nome, identidade proprietária, imagens, elementos exclusivos da marca nem layouts de forma idêntica.

---

## 1. Direção visual

**Engenharia à mostra.**

O site parece um instrumento bem construído, não um pôster. A escuridão não é para criar clima — é o fundo neutro de um painel técnico. A cor aparece pouco e sempre com função: sinaliza o que é interativo ou o que é a única ideia importante daquele bloco.

**Três princípios:**

1. **Contraste por escala, não por enfeite.** A hierarquia vem da diferença brutal entre o tamanho do título e o do corpo. Sem sombras, sem brilhos, sem molduras decorativas.
2. **Cor é sinal.** Toda a paleta vem da logo, então a hierarquia não pode se apoiar em matiz — se apoia em **brilho**. O azul claro `action` marca o que é acionável; as cores escuras da marca só aparecem em grafismo. Todo o resto é neutro. Se algo está colorido, tem que haver um motivo.
3. **Vazio é estrutura.** O espaço entre as seções é maior do que parece confortável. É o que faz o conteúdo respirar e transmite confiança.

**Palavras que descrevem:** preciso, técnico, denso, confiante, silencioso.
**Palavras que não descrevem:** divertido, suave, orgânico, luxuoso, futurista.

---

## 2. Paleta

### Neutros — a base

| Token | Hex | Uso |
|---|---|---|
| `ink-950` | `#0B0B0F` | Fundo da página. Único fundo do site. |
| `ink-900` | `#111116` | Fundo do footer e de faixas alternadas |
| `ink-800` | `#17171E` | Fundo de card, fundo de campo de formulário |
| `ink-700` | `#22222C` | Borda padrão, divisores |
| `ink-600` | `#33333F` | Borda em hover, borda de campo em foco |
| `ink-400` | `#6E6E7A` | Numerais decorativos, marca d'água. **Só ≥24px.** |
| `ink-300` | `#A1A1AD` | Texto secundário, parágrafos de apoio |
| `ink-100` | `#E4E4E9` | Texto de corpo |
| `ink-50` | `#F4F4F6` | Texto de título, texto primário |

### Acentos

Derivados da logo (D20). As cores brutas da logo são escuras demais para interface — servem só como grafismo. As versões de interface mantêm a matiz e sobem a luminosidade até passar em AA.

**Brutas — extraídas da logo. Uso exclusivamente decorativo:**

| Token | Hex | Origem |
|---|---|---|
| `brand-blue` | `#184890` | Facetas azuis, lado esquerdo |
| `brand-violet` | `#483078` | Centro do poliedro |
| `brand-purple` | `#601878` | Facetas roxas, lado direito |

**De interface — versões claras, verificadas:**

| Token | Hex | Papel |
|---|---|---|
| `action` | `#478AF5` | **Primário.** Botões, links, foco, estado ativo |
| `action-lift` | `#6FA4F8` | Hover do primário — **clareia**, nunca escurece |
| `accent` | `#D068F3` | Destaque de texto, palavra em gradiente, kickers |
| `alert` | `#FF5C5C` | Erro de formulário — exclusivamente |

**Dois gradientes, com usos que não se misturam:**

- `--gradient-text: linear-gradient(100deg, #478AF5 0%, #D068F3 100%)`
  Só para **uma palavra por título display**, via `background-clip: text`. Ambas as pontas passam em AA, então o texto continua legível em todo o percurso.
- `--gradient-glow: linear-gradient(100deg, #184890 0%, #601878 100%)`
  Só para as **formas abstratas** do hero e da About. São decorativas e `aria-hidden` — não precisam de contraste.

Nunca aplicar gradiente em botão, card, borda ou fundo de seção.

> ⚠️ **Regra que compensa a falta de contraste de matiz.** Como a paleta inteira vive na faixa azul→roxo, o CTA não se destaca por cor — se destaca por **luminância**. Por isso: o botão primário é o **único** elemento do site com fundo saturado preenchido. Nenhum card, faixa, tag ou ícone pode ter fundo colorido cheio. Quebrar isso apaga o CTA.

### Contraste verificado sobre `ink-950` (#0B0B0F)

| Cor | Razão | Permitido em |
|---|---|---|
| `ink-50` | 17.7:1 | Qualquer texto |
| `ink-100` | ~15:1 | Qualquer texto |
| `action-lift` | 7.8:1 | Qualquer texto, ícones, bordas |
| `ink-300` | 7.6:1 | Qualquer texto |
| `accent` | 6.5:1 | Qualquer texto |
| `action` | 5.8:1 | Qualquer texto, ícones, bordas |
| `ink-400` | 3.8:1 | ⚠️ **Só** texto grande decorativo (≥24px). **Nunca** corpo de texto. |
| `brand-blue` | 1.9:1 | ❌ **Nunca** em texto. Só grafismo decorativo. |
| `brand-purple` | 1.8:1 | ❌ **Nunca** em texto. Só grafismo decorativo. |
| `ink-950` sobre `action` | 5.8:1 | Texto do botão primário |
| `ink-950` sobre `action-lift` | 7.8:1 | Texto do botão em hover |

Toda combinação nova precisa ser medida antes de entrar no código.

> ⚠️ Escurecer o botão no hover **reprova**: `#2E6FD8` daria 4.1:1 com o texto escuro, abaixo dos 4.5:1 exigidos para o rótulo de 15px. Por isso o hover clareia.

### Aplicação por função

- **Fundo da página:** `ink-950`, em todas as páginas, sem exceção.
- **Fundo de card:** `ink-800` com borda `ink-700` de 1px.
- **Texto:** título `ink-50`; corpo `ink-100`; apoio `ink-300`; kicker `action`.
- **Botão primário:** fundo `action`, texto `on-action`. Hover: fundo `action-lift`.
- **Botão secundário:** transparente, borda `ink-600` de 1px, texto `ink-50`.
- **Detalhes:** divisores `ink-700`; numerais de lista `ink-400`; anel de foco `action`.

---

### Tema claro (D37)

O site tem **dois temas**, com alternador no header. A paleta escura **não funciona invertida**: `--action #478AF5` cai para 3.4:1 sobre fundo claro e `--accent #D068F3` para 3.0:1 — ambos reprovam. O tema claro precisa das versões **escuras** das mesmas matizes.

**Valores do tema claro, todos verificados sobre `#F4F4F6`:**

| Papel | Hex | Contraste |
|---|---|---|
| `--bg-page` | `#F4F4F6` | — |
| `--bg-surface` | `#EAEAEE` | — |
| `--bg-card` | `#FFFFFF` | — |
| `--border` | `#D8D8DE` | — |
| `--border-hover` | `#B8B8C2` | — |
| `--text-title` | `#0B0B0F` | 17.9:1 ✓ |
| `--text-body` | `#22222C` | 14.5:1 ✓ |
| `--text-muted` | `#55555F` | 6.6:1 ✓ |
| `--text-decor` | `#8A8A94` | 3.1:1 ⚠️ só ≥24px |
| `--action` | `#1E5FCC` | 5.4:1 ✓ |
| `--action-lift` | `#17499E` | 7.7:1 ✓ |
| `--on-action` | `#FFFFFF` | 5.9:1 sobre `--action` ✓ |
| `--accent` | `#9A2BC0` | 5.5:1 ✓ |
| `--alert` | `#C41E1E` | 5.3:1 ✓ |

**Regras que mudam de sentido entre os temas:**

- **O hover do botão inverte a direção.** No escuro, **clareia** (`#478AF5` → `#6FA4F8`). No claro, **escurece** (`#1E5FCC` → `#17499E`). Em ambos os casos o movimento é *para longe* do fundo.
- **O texto do botão inverte.** Escuro: `#0B0B0F` sobre azul claro. Claro: `#FFFFFF` sobre azul escuro. Por isso existe o token `--on-action` — nunca escrever a cor direto.
- **`--alert` não é a mesma cor nos dois.** `#FF5C5C` dá só 2.8:1 sobre fundo claro.
- **As formas decorativas clareiam no tema claro.** `--brand-blue` vira `#A8C4EC` e `--brand-purple` vira `#D4AEE2`. As cores brutas da logo são escuras demais e virariam manchas pesadas sobre o branco.

> ✅ **A logo foi verificada nos dois temas** e não precisa de tratamento especial em nenhum deles. As facetas são azuis e roxas saturadas — não quase-brancas — e a sombra embutida no arquivo assenta a forma sobre o fundo claro. Composta sobre `#0B0B0F` e `#F4F4F6` em 4 tamanhos, sem halo. A única restrição é de tamanho: **mínimo 64px** (D40).

---

## 3. Tipografia

Três famílias, cada uma com um trabalho definido. Todas self-hosted em `assets/fonts/` como `.woff2`, declaradas com `@font-face` e `font-display: swap`. Baixar apenas os pesos listados — não a família inteira.

| Família | Papel | Pesos |
|---|---|---|
| **Archivo** | Display — títulos de página e de seção | 700, 800, 900 |
| **Inter** | Corpo — parágrafos, labels, navegação | 400, 500, 600 |
| **JetBrains Mono** | Acento — kickers, metadados, numerais, tags | 400, 500 |

A monoespaçada é o gesto característico do estúdio. Substitui o acento manuscrito da referência e reforça a direção "engenharia à mostra". Usar com parcimônia: kickers de seção, ano e categoria dos projetos, rótulos de campo, tags de tecnologia. **Nunca** em parágrafos.

**Regras:**
- Títulos display: Archivo 900, `uppercase`, `letter-spacing: -0.03em`, `line-height: 0.92`.
- Títulos de seção: Archivo 800, caixa normal, `letter-spacing: -0.02em`, `line-height: 1.05`.
- Corpo: Inter 400, `line-height: 1.6`, largura máxima de 65 caracteres.
- Kickers: JetBrains Mono 500, `uppercase`, `letter-spacing: 0.18em`, 12px, cor `action`, precedido por um traço de 24px.
- Nunca justificar texto. Nunca sublinhar, exceto links dentro de parágrafo.

### Escala tipográfica

Razão 1.25 no celular, 1.333 no desktop. Display usa `clamp()` e nunca salta entre breakpoints.

| Token | Celular | Desktop | Fonte | Uso |
|---|---|---|---|---|
| `display-xl` | 44px | 128px | Archivo 900 | `<h1>` do hero |
| `display-lg` | 36px | 88px | Archivo 900 | `<h1>` das páginas internas |
| `display-md` | 30px | 56px | Archivo 800 | Título de seção |
| `heading` | 24px | 32px | Archivo 800 | Título de card, item de lista |
| `subheading` | 20px | 24px | Inter 600 | Subtítulo |
| `body-lg` | 17px | 19px | Inter 400 | Parágrafo do hero |
| `body` | 16px | 16px | Inter 400 | Parágrafo padrão |
| `body-sm` | 14px | 14px | Inter 400 | Texto do footer, apoio |
| `mono` | 12px | 12px | JetBrains Mono 500 | Kicker, metadado |
| `marquee` | 32px | 56px | Archivo 800 | Texto do marquee |

Valores `clamp()`:
```
display-xl: clamp(2.75rem, 1.5rem + 6.25vw, 8rem)
display-lg: clamp(2.25rem, 1.3rem + 4.75vw, 5.5rem)
display-md: clamp(1.875rem, 1.3rem + 2.9vw, 3.5rem)
heading:    clamp(1.5rem, 1.35rem + 0.75vw, 2rem)
marquee:    clamp(2rem, 1.4rem + 3vw, 3.5rem)
```

Tamanho mínimo de qualquer texto: 12px, e somente para monoespaçada em caixa alta.

---

## 4. Espaçamentos

Base de 4px. Usar exclusivamente a escala.

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160 · 200`

| Situação | Celular | Desktop |
|---|---|---|
| Padding vertical de seção | 96px | 160px |
| Padding lateral da página | 20px | 80px |
| Kicker → título | 16px | 24px |
| Título → parágrafo | 20px | 24px |
| Parágrafo → botão | 32px | 40px |
| Entre itens de lista | 32px | 48px |
| Padding interno de card | 24px | 32px |
| Entre colunas da grade | 24px | 48px |
| Altura do header | 64px | 80px |

Largura máxima do conteúdo: 1440px. Largura máxima de bloco de texto: 65ch.
O respiro vertical é intencionalmente grande. Se um layout parecer vazio demais no desktop, está correto.

---

## 5. Bordas e raios

**Bordas:** sempre 1px, sólidas. Nunca 2px ou mais, exceto o anel de foco.
- Padrão: `ink-700`
- Hover: `ink-600`
- Foco: `action`
- Erro: `alert`

**Raios:**

| Token | Valor | Uso |
|---|---|---|
| `radius-none` | 0 | Divisores, faixas, marquee |
| `radius-sm` | 4px | Tags, badges |
| `radius-md` | 8px | **Campos de formulário** |
| `radius-lg` | 12px | Cards, contêineres de imagem |
| `radius-xl` | 20px | Blocos visuais grandes |
| `radius-pill` | 999px | **Botões — todos** |

**Botões são pílula** (D36). Campos de formulário **não** — ficam em 8px, como na referência. A distinção importa: pílula sinaliza ação, retângulo arredondado sinaliza entrada de dado. Se os dois tiverem o mesmo raio, o formulário vira uma sopa de cápsulas.

Sem sombra em nenhum elemento, **nos dois temas** (D13). Profundidade vem de fundo e borda. No tema claro, a separação de planos se faz por borda de 1px mais o degrau entre `--bg-page` e `--bg-card` — não por elevação.

---

## 6. Estilo dos botões

**Primário** — `Start a project`, `Send message`
- Fundo `--action`, texto `--on-action`, Inter 600, 15px, `uppercase`, `letter-spacing: 0.08em`
- Padding `16px 32px`, **raio pílula (999px)**, sem borda
- Ícone de seta à direita, 16px, com 8px de gap
- Hover: fundo `action-lift`, seta desloca 3px para a direita, transição de 180ms
- Ativo: escala 0.98
- Foco: anel `action` de 2px com offset de 2px
- Desabilitado: opacidade 0.4, cursor `not-allowed`

**Secundário** — `See our work`
- Transparente, borda `ink-600` de 1px, texto `ink-50`, mesma tipografia e padding
- Hover: borda `action`, texto `action`
- Nunca aparece sozinho — sempre ao lado de um primário

**Terciário / link de texto** — `View all`, links do footer
- Sem fundo nem borda. Texto `action`, monoespaçada 12px, caixa alta
- Hover: linha de 1px surge por baixo, crescendo da esquerda para a direita

Máximo de **um** botão primário por dobra.

---

## 7. Estilo dos cards

**Card padrão** (valores, informações de contato)
- Fundo `ink-800`, borda `ink-700` de 1px, raio 12px, padding 32px
- Hover: borda `ink-600`, deslocamento de -2px no eixo Y, 200ms
- Sem sombra, sem brilho, sem gradiente no fundo

**Card de projeto** (`/work`, Selected work)
- Sem fundo nem borda — a imagem é o card
- Imagem com raio 12px, proporção 4:3, `object-fit: cover`, saturação 90% no repouso
- Abaixo da imagem: nome em Archivo 800 à esquerda; categoria e ano em monoespaçada 12px `ink-400` à direita
- Hover: saturação volta a 100%, escala 1.02 dentro de contêiner com `overflow: hidden`, e uma faixa desliza de baixo revelando uma linha de descrição e as tags de tecnologia
- **Em toque, a descrição e as tags ficam sempre visíveis** — sem depender do hover
- Enquanto os projetos forem demonstrativos, cada card exibe uma tag `DEMO` em monoespaçada, no canto superior esquerdo da imagem

**Linha de serviço** (`/services`)
- Não é card: é uma linha com divisor superior de 1px `ink-700`
- Grade em desktop: numeral (80px) · nome (flexível) · descrição (400px) · seta (40px)
- Hover: fundo `ink-900`, numeral muda para `action`, seta desloca na diagonal
- Abaixo de `md` vira bloco empilhado: numeral, nome, descrição

---

## 8. Direção das fotografias

O estúdio não tem imagens próprias ainda. Até que tenha, todo espaço de imagem recebe um bloco marcado `[PLACEHOLDER: imagem]`, na proporção correta, com fundo `ink-800`.

**Quando houver imagens:**

- **Assunto:** interfaces em contexto — telas em dispositivos reais, sobre superfícies reais. Nada de renderizações flutuantes em fundo infinito.
- **Iluminação:** natural, direcional, com sombras marcadas. Ambientes escuros ou de meia-luz, para assentar sobre `ink-950`.
- **Cor:** paleta contida — neutros frios, preferencialmente na mesma faixa azul da marca. Sem imagem de dominante quente forte (laranja, vermelho, amarelo) que brigue com a paleta azul→roxo.
- **Tratamento:** saturação 90% no repouso, 100% no hover. Sem filtro colorido, sem duotone, sem preto e branco.
- **Enquadramento:** ângulos oblíquos e recortes fechados. Sem foto centralizada e frontal de produto.
- **Pessoas:** raramente, e nunca olhando para a câmera. Mãos e postura, não retrato posado.
- **Proibido:** banco de imagens genérico (aperto de mão, equipe rindo em sala de reunião, gráfico ascendente), mockup de dispositivo em perspectiva isométrica, foto com texto embutido.

**Formas abstratas** (hero, About): superfícies facetadas escuras com `--gradient-glow` atravessando por baixo, como luz difusa — ecoando a geometria do poliedro da logo sem repetir o desenho. Geradas como SVG ou CSS, nunca como imagem raster. Sempre `alt=""` — são decorativas.

---

## 9. Tratamento do produto

O "produto" é o trabalho do estúdio. Ele é apresentado como evidência, não como propaganda.

- Cada projeto mostra **uma** imagem. Sem galeria, sem carrossel.
- Nome do projeto em Archivo 800; categoria e ano em monoespaçada `ink-400`. A hierarquia deixa claro o que é nome e o que é metadado.
- As tecnologias aparecem como tags em monoespaçada 12px, com borda de 1px e raio 4px — nunca como logotipos.
- Sem selo de prêmio, sem contador de métrica, sem depoimento sobreposto à imagem.
- **Enquanto os casos forem demonstrativos, a tag `DEMO` é obrigatória e o subtítulo da página `/work` declara isso em texto.** Não apresentar demonstração como trabalho de cliente.

---

## 10. Movimento e animações

**Princípio:** o movimento confirma uma ação ou revela uma estrutura. Nunca chama atenção para si.

| Situação | Comportamento | Duração | Easing |
|---|---|---|---|
| Hover de botão | Cor + seta 3px | 180ms | `ease-out` |
| Hover de card | Y -2px, borda clareia | 200ms | `ease-out` |
| Hover de imagem de projeto | Escala 1.02, saturação 100% | 400ms | `cubic-bezier(.2,.8,.2,1)` |
| Entrada por scroll | Opacidade 0→1, Y 16px→0 | 500ms | `ease-out` |
| Cascata em lista | 60ms de atraso entre itens, máx. 6 | — | — |
| Marquee | Translação contínua | 40s linear infinito | `linear` |
| Menu mobile | Abre em tela cheia, opacidade + escala 0.98→1 | 250ms | `ease-out` |
| Fundo do header ao rolar | Blur + fundo surge após 40px | 200ms | `ease-out` |
| Anel de foco | Sem transição | 0ms | — |

**Regras:**
- Só `transform` e `opacity`. Nunca animar `width`, `height`, `top`, `left` ou `box-shadow`.
- Entrada por scroll dispara uma única vez, a 20% de visibilidade. Nunca reverter ao rolar de volta.
- Marquee pausa no hover e no foco.
- Sem parallax, sem scroll sequestrado, sem contador animado, sem texto que se monta letra por letra.
- **`prefers-reduced-motion: reduce`:** marquees param, animações de entrada são substituídas por opacidade instantânea, escalas de hover desligadas, transições de cor mantidas. Nenhum conteúdo pode ficar invisível nesse modo.

---

## 11. Regras para desktop e celular

### Desktop (`lg` = 1024px e acima)
- Conteúdo com máximo de 1440px, centralizado, padding lateral de 80px
- Navegação horizontal visível no header, com `Start a project` à direita
- Hero: texto ocupando ~55% da largura, forma abstrata sangrando pela direita
- Serviços: 2 linhas em largura total — numeral, título, descrição e lista de entregáveis lado a lado
- Valores da About em grade de 4 colunas
- Projetos em 2 colunas com deslocamento vertical de 96px na coluna direita
- About: texto e visual lado a lado, 50/50
- Contact: formulário 2/3 e card lateral 1/3
- Footer em 3 colunas
- Palavra decorativa gigante no fundo da Contact: visível, `ink-900`, `aria-hidden`

### Celular (abaixo de `md` = 768px)
- Coluna única em tudo, padding lateral de 20px
- Header com logotipo à esquerda e botão de menu à direita; menu abre em tela cheia com os itens em `display-md` e o CTA primário no rodapé do menu
- Hero: título, parágrafo, CTAs empilhados em largura total; forma abstrata reduzida ou omitida
- Serviços empilhados, com o numeral acima do nome
- Projetos em pilha simples, sem deslocamento, com descrição e tags sempre visíveis
- About: visual **depois** do texto
- Contact: formulário primeiro, card depois
- Footer empilhado, links sociais em linha
- Palavra decorativa gigante da Contact: **omitida**
- Marquee com metade da velocidade e `marquee` em 32px
- Alvos de toque com no mínimo 44×44px e 8px de separação

### Tablet (`md` a `lg`)
- Padding lateral de 40px
- Grades de 4 colunas viram 2
- Navegação ainda em menu, não horizontal

---

## 12. Elementos que devem ser evitados

**Cor**
- Modo claro ou qualquer seção de fundo claro
- Cor fora dos tokens desta paleta
- Gradiente em botão, borda, card ou fundo de seção
- `brand-blue`, `brand-violet`, `brand-purple` ou `ink-400` em qualquer texto — reprovam em contraste
- Fundo saturado preenchido em qualquer coisa que não seja o botão primário — apaga o CTA
- Escurecer o botão primário no hover — derruba o contraste do rótulo
- Cor como única forma de comunicar estado ou erro

**Forma**
- Campos de formulário em formato pílula — pílula é só para botão
- Sombra de qualquer tipo, em qualquer um dos dois temas
- Brilho, `glow`, `neon`, `text-shadow`
- Vidro fosco, exceto o fundo do header ao rolar
- Bordas com mais de 1px, exceto o anel de foco
- Ícone dentro de círculo colorido

**Tipografia**
- Uma quarta família, ou fonte manuscrita/script
- Monoespaçada em parágrafo
- Texto justificado
- Caixa alta em bloco de texto corrido
- Texto sobre imagem sem faixa de contraste garantido
- Corpo abaixo de 16px, ou qualquer texto abaixo de 12px

**Movimento**
- Parallax, scroll sequestrado, revelação letra por letra
- Contador animado, carrossel automático
- Animação de entrada que repete ao rolar de volta
- Qualquer animação que ignore `prefers-reduced-motion`

**Conteúdo e padrões**
- Pop-up, modal de saída, banner de newsletter, chat ao vivo
- Foto de banco de imagens genérica
- Selo de prêmio, contador de "clientes satisfeitos", depoimento inventado
- Métrica, nome de cliente ou case sem confirmação — ver a regra de conteúdo em @CLAUDE.md
- Emoji na interface
- Mais de um botão primário na mesma dobra
- Variações do rótulo `Start a project` em botões primários

---

## 13. Implementação dos tokens em CSS

Todos os tokens deste arquivo vivem em `css/tokens.css`, dentro de `:root`. Nenhuma regra de CSS pode conter um valor literal de cor, tamanho, espaçamento, raio ou duração — sempre `var(--token)`. Se o valor não existe aqui, ele é adicionado aqui primeiro.

```css
:root {
  /* Cor — neutros */
  --ink-950: #0B0B0F;  --ink-900: #111116;  --ink-800: #17171E;
  --ink-700: #22222C;  --ink-600: #33333F;  --ink-400: #6E6E7A;
  --ink-300: #A1A1AD;  --ink-100: #E4E4E9;  --ink-50:  #F4F4F6;

  /* Cor — acentos */
  /* Cor — marca (da logo). DECORATIVO APENAS — reprovam em contraste */
  --brand-blue: #184890;  --brand-violet: #483078;  --brand-purple: #601878;

  /* Cor — interface (clareadas, verificadas em AA) */
  --action: #478AF5;      --action-lift: #6FA4F8;
  --accent: #D068F3;      --alert: #FF5C5C;

  --gradient-text: linear-gradient(100deg, var(--action) 0%, var(--accent) 100%);
  --gradient-glow: linear-gradient(100deg, var(--brand-blue) 0%, var(--brand-purple) 100%);

  /* Cor — papéis semânticos. TEMA ESCURO = padrão.
     Nos componentes use SEMPRE estes, nunca os tokens brutos:
     é o que faz os dois temas funcionarem sem duplicar CSS. */
  --bg-page: var(--ink-950);      --bg-surface: var(--ink-900);
  --bg-card: var(--ink-800);
  --text-title: var(--ink-50);    --text-body: var(--ink-100);
  --text-muted: var(--ink-300);   --text-decor: var(--ink-400);
  --border: var(--ink-700);       --border-hover: var(--ink-600);
  --focus-ring: var(--action);
  --on-action: var(--ink-950);    /* texto sobre o botão primário */
}

/* Tema claro — só os papéis semânticos mudam (D37). Valores verificados. */
:root[data-theme="light"] {
  --bg-page: #F4F4F6;   --bg-surface: #EAEAEE;  --bg-card: #FFFFFF;
  --text-title: #0B0B0F; --text-body: #22222C;
  --text-muted: #55555F; --text-decor: #8A8A94;
  --border: #D8D8DE;     --border-hover: #B8B8C2;

  --action: #1E5FCC;     --action-lift: #17499E;  /* ESCURECE no hover */
  --on-action: #FFFFFF;
  --accent: #9A2BC0;     --alert: #C41E1E;

  --brand-blue: #A8C4EC; --brand-violet: #BFB0E0; --brand-purple: #D4AEE2;
  --focus-ring: var(--action);

  /* Tipografia */
  --font-display: 'Archivo', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --fs-display-xl: clamp(2.75rem, 1.5rem + 6.25vw, 8rem);
  --fs-display-lg: clamp(2.25rem, 1.3rem + 4.75vw, 5.5rem);
  --fs-display-md: clamp(1.875rem, 1.3rem + 2.9vw, 3.5rem);
  --fs-heading:    clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
  --fs-marquee:    clamp(2rem, 1.4rem + 3vw, 3.5rem);
  --fs-subheading: 1.25rem;  --fs-body-lg: 1.0625rem;
  --fs-body: 1rem;           --fs-body-sm: 0.875rem;  --fs-mono: 0.75rem;

  --lh-display: 0.92;  --lh-heading: 1.05;  --lh-body: 1.6;
  --ls-display: -0.03em; --ls-heading: -0.02em;
  --ls-mono: 0.18em;   --ls-button: 0.08em;

  /* Espaçamento */
  --sp-1: 4px;    --sp-2: 8px;    --sp-3: 12px;   --sp-4: 16px;
  --sp-6: 24px;   --sp-8: 32px;   --sp-12: 48px;  --sp-16: 64px;
  --sp-24: 96px;  --sp-32: 128px; --sp-40: 160px; --sp-50: 200px;

  --section-y: var(--sp-24);      /* 160px em lg — ver media query */
  --page-x: 20px;                 /* 40px em md, 80px em lg */
  --content-max: 1440px;
  --measure: 65ch;

  /* Bordas e raios */
  --border-w: 1px;
  --radius-sm: 4px;  --radius-md: 8px;  --radius-lg: 12px;  --radius-xl: 20px;
  --radius-pill: 999px;   /* botões — e só botões */

  /* Movimento */
  --dur-fast: 180ms;  --dur-base: 200ms;
  --dur-slow: 400ms;  --dur-reveal: 500ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-image: cubic-bezier(.2, .8, .2, 1);
}

@media (min-width: 768px) { :root { --page-x: 40px; } }
@media (min-width: 1024px) { :root { --page-x: 80px; --section-y: var(--sp-40); } }

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-base: 0ms; --dur-slow: 0ms; --dur-reveal: 0ms; }
}
```

**Regras de uso:**
- Nos componentes, use **sempre os papéis semânticos** (`--text-body`, `--bg-card`, `--border`, `--on-action`), nunca os tokens brutos (`--ink-100`). Com dois temas isso deixou de ser preferência e virou obrigação: é o que permite trocar de tema sem duplicar uma única regra de componente.
- `--radius-pill` é exclusivo de botão. Campo de formulário usa `--radius-md` (8px). Ver seção 5.
- Não criar token novo sem registrar a decisão em @memoria.md.

**Alternador de tema — evitar o flash de tema errado:**

O tema precisa ser aplicado **antes da primeira pintura**, senão a página aparece escura por um instante e salta para clara. Isso exige um script inline no `<head>` — a única exceção à regra de manter o JS no fim do `<body>`:

```html
<script>
  (function () {
    var t = localStorage.getItem('theme');
    if (!t) t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  })();
</script>
```

- Primeira visita: respeita a preferência do sistema. Depois: vale a escolha salva.
- O botão do alternador fica no header, é um `<button>` com `aria-pressed` e rótulo acessível, e aparece nos 5 arquivos HTML.
- **Sem JS, o site carrega no tema escuro e continua inteiramente funcional.** O alternador é o único recurso que some.
- Não animar a troca de tema: transição de cor em página inteira custa caro e pisca. Trocar direto.
- Zerar as durações em `prefers-reduced-motion` cobre transições, mas **não** o marquee nem os `IntersectionObserver` — esses precisam ser desligados em JS e CSS explicitamente (ver seção 10).
