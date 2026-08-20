# memoria.md — Histórico vivo do projeto

Registro apenas do que ajuda na continuidade. Sem transcrições de conversa.
Regra de atualização: depois de cada decisão importante aprovada, adicionar aqui — ver @CLAUDE.md.

---

## Decisões aprovadas

### 05/08/2026 — Rodada de definição inicial

| # | Decisão | Contexto |
|---|---|---|
| D01 | **O projeto é o site do Brenkai Studio**, estúdio de desenvolvimento web | O briefing inicial mencionava "Anel X" como dono da identidade e citava "informações médicas sobre o produto", mas todas as referências eram do Brenkai Studio. Contradição levantada e resolvida: "Anel X" era resíduo de outro briefing. **Nenhum produto físico faz parte deste projeto.** |
| D02 | **Idioma: inglês apenas.** Sem alternador, sem i18n | Documentos internos permanecem em português |
| D03 | **Site multipáginas, 5 páginas:** Home, Services, Work, About, Contact | Mesma arquitetura da referência |
| D04 | **Objetivo: portfólio e credibilidade** | Não é venda direta. Sem checkout, preço ou catálogo |
| D05 | **CTA primário único: `Start a project` → `/contact`** | Rótulo fixo. Sem variações em botões primários |
| ~~D06~~ | ~~Stack: Next.js (App Router) + TypeScript + Tailwind CSS~~ | ❌ **Substituída em 05/08/2026 por D16.** Mantida aqui por rastreabilidade |
| D07 | **Tipografia: grotesca geométrica ousada.** Archivo (display) + Inter (corpo) + JetBrains Mono (acento) | Mantém a atmosfera da referência sem usar a fonte dela |
| D08 | **Não há conteúdo real.** Tudo entra como `[PLACEHOLDER]` marcado | Sem textos finais, sem projetos reais, sem imagens próprias |

### Decisões de identidade visual (05/08/2026)

| # | Decisão | Razão |
|---|---|---|
| ~~D09~~ | ~~Paleta: índigo `#5B4BFF` + menta `#00E5A0`~~ | ❌ **Substituída em 05/08/2026 por D20**, após a logo real chegar |
| ~~D10~~ | ~~Botões retangulares, raio 6px, sem pílula~~ | ❌ **Substituída em 05/08/2026 por D36** |
| D11 | ✅ **Validada.** Acento em monoespaçada (JetBrains Mono) no lugar do acento manuscrito da referência | Vira o gesto característico do estúdio e reforça a direção "engenharia à mostra" |
| ~~D12~~ | ~~Site exclusivamente escuro, sem modo claro~~ | ❌ **Substituída em 05/08/2026 por D37** |
| D13 | ✅ **Validada.** Sem sombras em nenhum elemento, nos dois temas. Profundidade vem de fundo e borda | |
| D14 | ✅ **Validada.** Meta de acessibilidade: WCAG 2.1 AA, com pares de contraste pré-verificados em @specs/design.md | AAA foi rejeitado: exigiria 7:1 e inviabilizaria a paleta da marca |
| D15 | **Metas de desempenho: Lighthouse mobile ≥95, LCP <2.0s, CLS <0.05** | Orçamento de JS revisto por D16 — ver D19 |

### Troca de stack (05/08/2026, mesma data)

| # | Decisão | Contexto |
|---|---|---|
| D16 | **Stack: HTML + CSS + JavaScript puro. Sem framework, sem build, sem npm, sem CDN** | **Substitui D06.** Motivo declarado pelo usuário: quer aprender e ter mais domínio sobre o próprio código. Contradição com D06 foi sinalizada antes de qualquer alteração, conforme a regra de @CLAUDE.md, e a substituição foi confirmada. Nova stack **travada** nos mesmos termos |
| D17 | **Formulário: `fetch` para Web3Forms ou Formspree**, com fallback de POST nativo se o JS falhar | Sem API Route, é preciso um serviço externo. Mantém os estados de carregando/sucesso/erro já planejados |
| D18 | **Header e footer duplicados nos 5 arquivos HTML** | Alternativas rejeitadas: injeção por JS (quebra SEO e causa flash) e adicionar um build (reintroduz o tooling que se quis evitar). Custo aceito: disciplina manual, registrada como regra em @CLAUDE.md |
| D19 | **CSS: custom properties em `:root` + nomenclatura BEM**, um arquivo por área | Tokens de @specs/design.md viram `css/tokens.css`, agora com esqueleto completo na seção 13 do design.md. Orçamento de JS cai de 120 KB para **15 KB**; CSS limitado a 40 KB |

### Rodada de pendências (05/08/2026)

| # | Decisão | Contexto |
|---|---|---|
| D20 | **Paleta alinhada à logo: azul → violeta → roxo.** Cores brutas `#184890` / `#483078` / `#601878` só como grafismo; interface usa versões clareadas `--action #478AF5` (5.8:1), `--action-lift #6FA4F8` (7.8:1), `--accent #D068F3` (6.5:1) | **Substitui D09** e reverte parte da R07. Sinalizado antes de alterar: a paleta da logo pertence à mesma família ciano→magenta que a R07 havia rejeitado, e as cores brutas reprovam em contraste (`#601878` dá 1.8:1). O usuário optou por alinhar mesmo assim. Resolvido clareando as matizes até passar em AA |
| D21 | **Formulário: Web3Forms** | Plano gratuito mais generoso e configuração mínima. Falta criar a conta e obter a chave |
| D22 | **`/work` mantida com casos demonstrativos e tag `DEMO` obrigatória** | Não há projetos reais. Rejeitadas: trocar por `/process`, remover a página, e adiar a publicação |
| D23 | **Só 2 serviços: Websites & Landing Pages e UI/UX Design** | E-commerce, SEO e manutenção **não** são oferecidos hoje e saem do site. A lista de 5 era hipótese herdada da referência. Compensação: cada serviço recebe tratamento ampliado e a página ganha uma seção de processo |
| D24 | **Equipe de 3: Kaique, Brian e Renato.** Copy em "we" | Funções de cada um ainda pendentes (#5) |
| D25 | **E-mail: `brenkaistudio@gmail.com`** | Funciona hoje, sem custo |
| D26 | **Eu escrevo o rascunho completo da copy**, sem afirmação factual verificável | Onde faltar fato real, fica `[PLACEHOLDER]` visível. O usuário edita depois |
| ~~D27~~ | ~~Header usa só a marca tipográfica, sem símbolo~~ | ❌ **Substituída em 05/08/2026 por D44.** A parte tipográfica continua: `BRENKAI` em Archivo 900 + `studio` em JetBrains Mono, agora **ao lado** do símbolo a 44px |
| D28 | **Sem seção de equipe na About.** Nenhum nome, função ou foto no site | Copy segue em "we" (D24), mas não identifica ninguém |
| D29 | **Seção de métricas construída por completo, porém comentada no HTML.** Entra no ar ao entregar o 1º projeto | O usuário quer números reais que cresçam a cada projeto. Como hoje o valor real é zero, publicar seria inventar ou exibir zero. Comentar resolve os dois |
| D30 | **Rodapé com um único link social: Instagram `@brenkaistudio`** → `https://instagram.com/brenkaistudio`, nova aba, `rel="noopener noreferrer"` | Sem Twitter, LinkedIn ou GitHub |
| D31 | **Sem promessa de prazo de resposta** no card da Contact | O compromisso é com resposta pessoal, não com hora marcada. Evita criar expectativa que pode não ser cumprida |
| D32 | **Deploy em Vercel ou Netlify, subdomínio gratuito.** Sem domínio próprio agora | Open Graph, `canonical` e `sitemap.xml` ficam com `[PLACEHOLDER]` de URL absoluta até o deploy |
| D33 | **Imagens dos cards de `/work` ficam `[PLACEHOLDER]`** | Rejeitados banco de imagens (o design.md proíbe foto genérica) e blocos abstratos |
| D34 | **Aviso curto de privacidade abaixo do botão do formulário.** Sem página dedicada | Cobre o básico de boa prática sem virar uma 6ª página |
| D35 | **Ano de fundação não é citado** | Não há dado confirmado e a regra proíbe inventar |

### Validação das decisões visuais (05/08/2026)

Rodada em que o usuário revisou, uma a uma, as decisões que eu havia proposto sem validação.

| # | Decisão | Contexto |
|---|---|---|
| D07 | ✅ **Trio tipográfico confirmado:** Archivo (display) + Inter (corpo) + JetBrains Mono (acento) | Archivo chega ao peso 900 e tem eixo de largura; Space Grotesk foi rejeitada por parar em 700 |
| D36 | **Botões em formato pílula (`radius: 999px`).** Campos de formulário ficam em 8px | **Substitui D10.** Sinalizado que pílula é o gesto mais reconhecível da referência e que mantê-la contraria a R07; o usuário optou por mantê-la mesmo assim. Campos seguem retangulares para preservar a distinção entre ação e entrada de dado |
| D37 | **Dois temas: escuro e claro, com alternador no header.** Preferência salva em `localStorage`, `prefers-color-scheme` na primeira visita | **Substitui D12.** Sinalizado antes de alterar que a paleta escura reprova invertida (`--action` cai para 3.4:1 e `--accent` para 3.0:1 sobre fundo claro). Resolvido com um conjunto completo de tokens claros, todos reverificados — ver S13 |

**Também validadas sem alteração:** D11 (acento monoespaçado), D13 (sem sombras), D14 (WCAG AA), D15 (Lighthouse ≥95, LCP <2,0s, CLS <0,05).

### Entrega de assets (05/08/2026)

| # | Decisão | Contexto |
|---|---|---|
| D38 | **Logo definitiva: `Logobrenkaisemfundo.png`**, 1024×1024, `32bppArgb` com canal alfa real. Destino: `assets/img/logo.png` | Recorte verificado: 79,4% totalmente transparente, e dos semitransparentes 91% são sombra escura contra apenas 1% claros — **sem franja branca**. Composta sobre `#0B0B0F` e `#F4F4F6` em 4 tamanhos, funciona nos dois temas |
| D39 | **Chave pública do Web3Forms:** `5a1f5b7c-4b81-42f7-aa3e-ac6ec1987533` | Vai no `<input type="hidden" name="access_key">`. É pública por projeto do serviço — fica visível no HTML e não é segredo |
| D40 | **Símbolo sozinho: mínimo 64px.** ⚠️ **Flexibilizada pela D44:** acompanhado do nome, 44px basta. O piso de 64px continua valendo quando o símbolo aparece isolado | Verificado que a 32px o símbolo vira mancha, isolado ou não |

### Construção (05/08/2026)

| # | Decisão | Contexto |
|---|---|---|
| D41 | **Servidor de desenvolvimento em `.claude/dev-server.js`**, em Node puro, sem dependências | Módulos ES são bloqueados sobre `file://`, então as páginas precisam ser servidas por HTTP para serem testadas. Fica fora do site — não viola a D16, que trata do que é publicado. Rodar com `node .claude/dev-server.js` |
| D42 | **Script de verificação em `.claude/check.js`** | Confere se header e footer continuam idênticos nas 5 páginas e lista os `[PLACEHOLDER]` restantes. É o antídoto para a fragilidade que a D18 aceitou. Rodar após mexer em header ou footer |
| D43 | **Favicon provisório:** um `B` em SVG sobre `--brand-violet` | A pendência #15 continua sua para decidir. Isto evita o ícone quebrado enquanto isso |
| D45 | **BrightSmile Dental entra na `/work` e no Selected work da Home**, como primeiro card, com link "View live site" para `https://brightsmile-dental-sage.vercel.app/` | É um **modelo próprio**, não trabalho de cliente: o telefone `(305) 555-0147` está na faixa fictícia reservada e a `og:image` aponta para um domínio `-demo`. Por isso a tag `DEMO` **continua obrigatória** (D22 intacta). Substitui o card fictício "Meridian" |
| D50 | **O orçamento de peso passa a ser medido comprimido: CSS ≤ 20 KB e JS ≤ 8 KB por página.** Substitui os números da D15 (45 KB de CSS e 18 KB de JS sem compressão) | O número sem compressão era um indicador indireto e parou de medir a coisa certa quando o hero entrou: `hero.css` tem 16,5 KB cru e **3,4 KB comprimido** (encolhe 79%). Pela régua antiga a Home reprovava por 12,6 KB; pela régua real transfere 15,6 KB com folga. Vercel e Netlify servem tudo comprimido, então é esse o número que existe na vida real. **Agora é verificável:** `node .claude/check.js` mede por página e falha se estourar. As demais metas da D15 (Lighthouse ≥95, LCP, CLS, INP) continuam valendo |
| D51 | **`.gitattributes` com `* text=auto eol=lf`** e binários marcados | Os commits do hero chegaram com CRLF enquanto o resto do projeto usava LF. O conteúdo era idêntico, mas o `check.js` comparava bytes e acusou o header como divergente. O `check.js` passou a normalizar CRLF e espaços finais antes de comparar, e o `.gitattributes` impede a recorrência |
| D48 | **Obsidian Ink entra na `/work` e no Selected work da Home**, no lugar do Halcyon, com imagem e link ao vivo para `https://obsidian-ink-kappa.vercel.app/` | Segundo modelo próprio. Telefone `(305) 555-0183` está na faixa fictícia reservada, então é demonstração e a tag `DEMO` **continua obrigatória** (D22). Stack real: página única com 8 seções ancoradas, React 18 via CDN unpkg e 2 canvas WebGL2 (o lettering 3D). Tags: React · WebGL · Vercel. Subtítulo da `/work` passou de "The first one is live" para "The first two are live". **Atlas permanece** como terceiro card fictício, por decisão do usuário |
| D52 | **O site "antes" sai do hero.** A maquete passa a mostrar apenas o site premium, com sua animação de entrada | Pedido do usuário. Removidos: o markup `.hero-demo__basic` do `index.html`, todas as regras `.hero-demo__basic*`, os `@keyframes hero-basic-out` e `hero-flash`, o bloco `.hero-demo__flash` e a injeção do flash no `js/hero.js` — o clarão existia só para mascarar a troca entre os dois sites. **Animação retemporizada:** o premium entrava aos 2,4s porque esperava o básico sair; agora entra aos 0,75s e o planeta aos 0,95s, construindo enquanto o navegador ainda assenta |
| D47 | ✅ **Confirmado funcionando pelo usuário em 07/08/2026.** Efeito de cards empilhados (sticky stacking) no Selected work da Home, com 3 cards. Track de 85vh por card, `position: sticky` em `calc(6rem + i*28px)` (8rem no desktop), escala `1 - (total-1-i)*0.03` → 0,94 / 0,97 / 1,00 | **Pedido originalmente com Framer Motion, que exige React + npm + build e desfaria a D16.** Contradição sinalizada antes de qualquer alteração; o usuário optou por manter a D16 e reproduzir o efeito sem framework. Feito em CSS + `js/stack.js` (2,6 KB): um listener de scroll com `requestAnimationFrame` faz o que `useScroll`/`useTransform` fazem por baixo. Atlas subiu para a Home para o efeito ter profundidade — com 2 cards a diferença seria de só 3% |
| D46 | **Copy ampliada sobre a stack.** A Services deixa de dizer "hand-written HTML, CSS e JavaScript" como única forma e passa a "escolhemos a ferramenta mais simples que o projeto exige — muitas vezes HTML puro, às vezes um framework". A About passa a falar de "este site" em vez de todo trabalho | O BrightSmile é Next.js + Tailwind, o que contradizia frontalmente a copy anterior. Contradição sinalizada antes de alterar. O diferencial preservado é o que continua verdadeiro: nada de page builder e nada de template comprado |
| D44 | **Símbolo entra no header, a 44px, ao lado do nome.** Rodapé sobe de 64px para 96px. Asset único em 192px (26 KB) serve os dois | **Substitui a D27 e flexibiliza a D40.** Antes de alterar, renderizei o símbolo em 32/40/44/48/56px ao lado do nome sobre o fundo real: a partir de 44px a silhueta facetada lê bem. O piso de 64px da D40 tinha sido medido com o símbolo **sozinho** — ao lado do nome ele só acompanha, e o nome carrega a identificação. 44px também coincide com o alvo mínimo de toque, então o conjunto vira um alvo confortável |

---

## Decisões rejeitadas

| # | Rejeitado | Por quê |
|---|---|---|
| R01 | Tratar o projeto como o site de um produto "Anel X" | Contradizia todas as referências. Confirmado pelo usuário como resíduo de outro briefing |
| R02 | Site bilíngue PT/EN | Dobraria o custo de copy e adicionaria complexidade de rotas |
| R03 | Landing page única | Não sustenta a profundidade de portfólio e "sobre" necessária ao objetivo de credibilidade |
| R04 | Venda direta / e-commerce | Fora do objetivo do site |
| ~~R05~~ | ~~React+Vite, Astro e HTML puro como stack~~ | ❌ **Revertida em 05/08/2026 por D16** — HTML puro passou a ser a stack oficial. React+Vite e Astro seguem rejeitados (ver R08) |
| R08 | Astro como meio-termo, injeção de header/footer por JS, e adicionar um build leve (Eleventy) | Todos reintroduziriam ferramentas que D16 quis eliminar. Injeção por JS ainda prejudicaria SEO e causaria flash de conteúdo |
| R09 | Formulário apenas com `mailto:` | Atrito alto e conversão muito menor num site cujo objetivo é gerar contato |
| R10 | Trocar `/work` por uma página `/process`; remover `/work`; ou construí-la e só publicar quando houver projeto real | Optou-se por manter a página com casos demonstrativos assumidos (D22) |
| R11 | Manter D09 (índigo + menta); usar índigo + roxo da logo; ajustar só o índigo ao azul da logo | Optou-se por alinhar a paleta inteira à logo (D20) |
| R12 | Usar a logo como está, com o fundo opaco; e redesenhar o poliedro como SVG limpo | Optou-se por recortar o fundo e usar marca tipográfica no header (D27) |
| R13 | Marca tipográfica sem símbolo; logo em PNG/JPG sem tratamento; símbolo desenhado do zero | Já existe uma logo própria — as três opções foram descartadas quando o arquivo chegou |
| R14 | Citar equipe com nome e função, ou com nome, função e foto | Optou-se por não citar equipe (D28) |
| R15 | Remover a seção de métricas; trocá-la por princípios; publicar com zero; usar métricas do próprio site | Optou-se por construir e comentar até o 1º projeto (D29) |
| R16 | Twitter, LinkedIn e GitHub no rodapé | Só Instagram (D30) |
| R17 | Prometer resposta em 24h ou 48h; remover o card da Contact | Optou-se por tom sem prazo (D31) |
| R18 | Banco de imagens gratuito (Unsplash/Pexels) e blocos gráficos abstratos para os cards de `/work` | Optou-se por `[PLACEHOLDER]` (D33). Banco de imagens já era proibido pela seção 12 do design.md |
| R19 | Página de privacidade completa; nenhum aviso | Aviso curto no formulário (D34) |
| R26 | **Framer Motion / migrar o site para React** para o efeito de empilhamento | Desfaria a D16, que é a decisão mais deliberada do projeto. O efeito inteiro cabe em 2,6 KB de JS próprio — ver D47 |
| R20 | Space Grotesk como display; só Archivo + Inter sem monoespaçada | Space Grotesk para em 700 e não sustenta os títulos display; dispensar a monoespaçada derrubaria junto o gesto característico (D11) |
| R21 | Botões com raio de 6px, cantos retos ou 12px | Optou-se por pílula (D36) |
| R22 | Site só escuro; tema seguindo a preferência do sistema sem botão | Optou-se por alternador explícito (D37) |
| R23 | Sombra só no tema claro; sombra sutil nos dois temas | D13 mantida: sem sombra em lugar nenhum |
| R24 | WCAG AAA; sem meta formal de acessibilidade | AAA exigiria 7:1 e deixaria o site praticamente em preto e branco |
| R25 | Lighthouse ≥90; sem meta formal de desempenho | Metas agressivas mantidas (D15) — com HTML estático são folgadas e viram argumento de venda |
| R06 | Neo-grotesca neutra e serifada editorial | Menos personalidade / afastam demais da atmosfera desejada |
| R07 | Reuso do gradiente ciano→magenta, dos botões pílula e do acento manuscrito da referência | A identidade final precisa ser original do Brenkai Studio |

---

## Alterações realizadas

| Data | Alteração |
|---|---|
| 05/08/2026 | Criado o cérebro documental: `CLAUDE.md`, `specs/site.md`, `specs/design.md`, `memoria.md`. Nenhum código escrito ainda |
| 05/08/2026 | **Site construído.** 6 páginas HTML (5 + 404), 5 arquivos CSS, 4 de JS, `sitemap.xml`, `robots.txt`, favicon provisório e a logo em `assets/img/`. Copy completa em inglês. Verificado no navegador nos dois temas e em 375/768/1280px |
| 05/08/2026 | **Validação visual (D36, D37).** Botões passam a pílula: seções 0, 5, 6, 12 e 13 do design.md ajustadas. Tema claro adicionado: nova subseção de paleta clara com 14 valores verificados na seção 2, blocos `[data-theme="light"]` e script anti-flash na seção 13, alternador documentado no header. Em site.md: header, funcionalidades, árvore de arquivos, regras de implementação, acessibilidade, orçamentos (JS 15→18 KB, CSS 40→45 KB) e escopo |
| 05/08/2026 | **Rodada de pendências (D20–D27).** Paleta inteira do design.md substituída pela derivada da logo, com nova camada de cores brutas × de interface e dois gradientes separados; seções 0, 1, 2, 3, 6, 7, 8, 11, 12 e 13 do design.md ajustadas. Em site.md: `/services` de 5 para 2 disciplinas com seção de processo nova, proposta de valor e equipe atualizadas, tabela de pendências reescrita com estado por item e nota técnica sobre a logo |
| 05/08/2026 | **Troca de stack (D16).** Atualizados os 4 arquivos: CLAUDE.md ganhou a seção "Regras da stack sem build"; site.md teve a seção 10 reescrita (tabela de stack, árvore de arquivos, regras) e ajustes nas seções 4, 7, 9 e 13; design.md teve a seção 3 ajustada e ganhou a seção 13 com o esqueleto de `tokens.css`; memoria.md registrou D16–D19, R08–R09 e o rebaixamento de D06/R05 |

---

## Problemas encontrados

| # | Problema | Estado |
|---|---|---|
| P01 | O briefing citava "Anel X" e "informações médicas", mas as referências eram todas do Brenkai Studio | ✅ Resolvido — ver D01 |
| P02 | A pasta de referências chama-se `Ideiasbrenkai/`, não `referencias/` como indicado no briefing | ✅ Resolvido — caminho corrigido nos documentos |
| P03 | **Tensão de escopo:** o objetivo é "portfólio e credibilidade", mas não existe portfólio real. Um site de credibilidade sem prova real é o principal risco do projeto | ⚠️ **Aberto** — ver S01 e pendência #2 |
| P04 | A referência exibe métricas ("20+ projetos", "98 de PageSpeed", "100% de retenção") e projetos nomeados (Lumen, Vantage, Aurora, Pulse) que a própria página declara serem demonstrações | ✅ Resolvido — nada disso será reaproveitado; ver S02 |
| P05 | `indigo #5B4BFF` tem contraste 3.6:1 sobre o fundo — insuficiente para texto de corpo | ✅ Resolvido — ver S03 |
| P06 | Sem framework, header e footer passam a ser duplicados em 5 arquivos. Toda alteração no menu vira 5 edições manuais e o risco de divergência é real | ⚠️ **Mitigado, não eliminado** — ver S06 |
| P07 | S05 previa manter a copy separada dos componentes para facilitar uma futura versão pt-BR. Sem build, não existem componentes | ✅ Resolvido — ver S07 |
| P08 | **Os arquivos da logo não são utilizáveis.** O PNG é `24bppRgb` sem canal alfa, com o fundo `#031122` embutido — apareceria como retângulo sobre o `#0B0B0F` do site. O SVG é um traço automático (Potrace) do PNG: quadrado preto com a forma em negativo e ~30 respingos de ruído | ⚠️ **Aberto e bloqueante** — ver S08 e pendência #11 |
| P09 | Tentativa de recorte automático por chave de luminância **falhou**. O brilho difuso do fundo tem a mesma faixa de luminosidade do poliedro, então o fundo inteiro foi preservado e o *unpremultiply* estourou as cores | ✅ Diagnosticado — não há solução por script; exige ferramenta de recorte |
| P10 | As cores brutas da logo reprovam em contraste: `#601878` dá **1.8:1** e `#184890` dá **1.9:1** sobre o fundo do site | ✅ Resolvido — ver S09 |
| P11 | Com a paleta inteira em azul→roxo, o CTA perde o contraste de matiz que fazia o botão saltar | ✅ Resolvido — ver S10 |
| P12 | Com apenas 2 serviços em vez de 5, a página `/services` fica visualmente vazia | ✅ Resolvido — ver S11 |
| P13 | **A About ficou magra.** Sem equipe (D28), sem métricas visíveis (D29) e sem ano de fundação (D35), restam só a história em 3 parágrafos e 4 cards de valores | ⚠️ **Aberto** — ver S12 |
| ~~P15~~ | ~~A logo não funciona no tema claro~~ | ❌ **Previsão incorreta, retirada em 05/08/2026.** Baseava-se no arquivo antigo, cujo fundo escuro embutido lavava os destaques. No recorte definitivo as facetas são azuis e roxas saturadas e a forma funciona nos dois temas — verificado por composição sobre `#0B0B0F` e `#F4F4F6` |
| P18 | **CTAs aparecendo no breakpoint errado.** `components.css` carrega depois de `layout.css`, então `.btn { display: inline-flex }` vencia `.nav__cta { display: none }` e `.header__cta { display: none }` — mesma especificidade, regra posterior ganha. No mobile isso empurrava o botão do menu para fora da tela | ✅ Corrigido — ver S17 |
| P19 | **O menu mobile cobria o próprio botão de fechar.** O `.nav` é filho do `.header` no HTML; o header cria contexto de empilhamento, e o overlay (`z-index: 40`) pintava acima do logotipo e do botão, que tinham `z-index: auto`. O usuário abria o menu e não conseguia fechar | ✅ Corrigido — ver S18 |
| P20 | **Conteúdo invisível para sempre se o JS não rodasse.** `.reveal` começava com `opacity: 0` e só o `IntersectionObserver` o revelava | ✅ Corrigido — ver S19 |
| P21 | **Conteúdo invisível ao pular o scroll.** Se a viewport passa direto por um elemento (âncora, restauração de scroll ao recarregar, voltar pelo histórico), o observer dispara com `isIntersecting: false` e o elemento ficava em `opacity: 0` permanentemente. Reproduzido: 3 cards na `/work`, só 1 aparecia | ✅ Corrigido — ver S20 |
| P22 | **Alvos de toque abaixo de 44×44**, contrariando a seção 11 de @specs/site.md: alternador de tema (40×40), logotipo (30px de altura), links do rodapé (22px), e-mail, Instagram e o link "View all" | ✅ Corrigido — ver S21 |
| P24 | **Codificação dos 5 HTML corrompida** ao usar `Get-Content`/`Set-Content` do PowerShell 5.1 para uma substituição em massa: ele lê como ANSI e grava como UTF-8, gerando duplo encode (`—` virou `â€"`, `·` virou `Â·`) | ✅ Corrigido e prevenido — ver S22 |
| P25 | **A logo tinha 1,5 MB** para ser exibida a 64px no rodapé | ✅ Corrigido — ver S23 |
| P23 | **As fontes não estão no projeto.** Archivo, Inter e JetBrains Mono precisam ser baixadas em `.woff2` — não consigo baixar binários daqui | ⚠️ **Aberta** — pendência #16. O site funciona com fontes do sistema até lá |
| P17 | **O símbolo é ilegível a 32px.** Verificado: o `</>` central desaparece e as facetas viram ruído. A 64px já lê como forma | ⚠️ **Parcialmente aberto** — resolve o header (S16), mas o **favicon** continua sem solução |
| P16 | Tema aplicado por JS causa flash de tema errado antes da primeira pintura | ✅ Resolvido — ver S15 |
| P14 | **A `/work` ficou fraca.** Casos demonstrativos (D22) com imagens em `[PLACEHOLDER]` (D33): a página de prova não tem prova nem imagem | ⚠️ **Bem melhor, ainda aberto.** O BrightSmile (D45) é um site real, completo e navegável, com link ao vivo — prova bem mais forte que qualquer print. Faltam a imagem do card (#18) e os outros 2 cards, que seguem fictícios |
| P33 | **O título do hero era cortado pela metade.** `--fs-display-xl` cresce com a **viewport** (`6.25vw`), o que valia quando o hero ocupava a largura toda. Com a maquete dividindo a linha, a coluna tem 433px em 1280px de tela enquanto "WEBSITES" pedia ~540px — e o `overflow: hidden` das linhas, que existe para a animação de subida e não pode sair, fatiava a palavra | ✅ Corrigido — ver S28 |
| P32 | **Remover o site "antes" apagou três `@keyframes` junto** — `hero-copy-in`, `hero-title-in` e `hero-browser-arrive`. Meus regex foram largos demais. **O CSS não avisa**: uma animação apontando para keyframe inexistente é silenciosamente ignorada, e como o estado base dessas linhas é `opacity: 0`, todo o texto do hero ficou invisível | ✅ Corrigido — ver S27 |
| P31 | **A maquete do hero quebrava no celular** — textos sobrepostos e conteúdo saindo da moldura. Duas causas somadas: (1) `line-height: .93` no título premium, ou seja **entrelinha menor que a fonte** — tolerável a 3,4rem, mas a 1,8rem eram 28,8px de letra em 26,8px de linha, e as linhas se sobrepunham fisicamente; (2) tipografia e espaçamento em `rem`/`px` fixos dentro de uma moldura de proporção fixa e largura fluida — os dois escalavam de forma independente e só coincidiam numa largura. Varredura de 320 a 2560px acusou transbordo em **320, 640 e 1024**, com **8 elementos vazando** em 1024 | ✅ Corrigido — ver S26 |
| P29 | **O `check.js` acusou header e footer como divergentes**, mas o conteúdo era idêntico — a diferença eram 41 caracteres em 41 linhas, ou seja, CRLF contra LF. Falso alarme corrói a confiança na verificação | ✅ Resolvido — ver D51 |
| P30 | **O `hero.css` estourava o orçamento de CSS** em 12,6 KB na Home | ✅ Resolvido — ver D50. A régua estava errada, não o arquivo. Procurei desperdício antes de concluir isso: 129 blocos em 369 linhas, só 2% de comentários e **apenas 3 blocos de declaração repetidos**, todos minúsculos. Não havia gordura — cortar 12,6 KB significaria remover funcionalidade |
| P28 | **A escala do empilhamento terminava cedo demais.** Usei `altura do track − altura do card` (209px) como janela de progresso, então o card encolhia em 200px de scroll e ficava parado por mais 400px até o próximo chegar. Lia como travada | ✅ Corrigido — ver S25 |
| P27 | **Imagem colada na conversa não vira arquivo.** Uma captura colada no chat chega como conteúdo visual, não como bytes em disco — e eu não consigo gravar binário. O print do navegador também falhou: a ferramenta só captura o que está sendo composto na tela, e o painel estava fechado (`the Browser pane is not displayed`). O usuário salvou o arquivo, mas o Windows gravou como `work-brightsmile.jpg.jpg` (extensão dupla) | ✅ Resolvido — ver S24 |
| P26 | **O trabalho do portfólio contradizia a copy do site.** O BrightSmile é Next.js + Tailwind; a Services dizia que vocês constroem só em HTML, CSS e JS escritos à mão. Um visitante técnico abriria os dois e veria | ✅ Resolvido — ver D46 |

---

## Soluções aplicadas

| # | Solução |
|---|---|
| S01 | Enquanto não houver projetos reais: cada card de projeto exibe tag `DEMO` obrigatória e o subtítulo da `/work` declara isso em texto. Demonstração nunca é apresentada como trabalho de cliente |
| S02 | Regra dura em @CLAUDE.md: nenhum número, nome de cliente, case, depoimento ou métrica pode ser escrito sem confirmação — nem como exemplo temporário. Tudo vira `[PLACEHOLDER]` |
| S03 | `indigo` restrito a texto ≥24px e elementos gráficos. Criado `indigo-lift #8B7BFF` (5.9:1) para texto pequeno. `ink-400` (3.8:1) restrito a numerais decorativos ≥24px |
| S04 | Toda informação revelada no hover também aparece em toque — cards de projeto mostram descrição e tags de forma permanente em telas pequenas |
| ~~S05~~ | ~~Copy separada dos componentes para facilitar futura versão pt-BR~~ — substituída por S07 após D16 |
| S06 | Regra explícita em @CLAUDE.md: ao alterar header, footer, menu, logotipo ou links sociais, atualizar os 5 arquivos HTML e conferir um por um antes de encerrar. Header e footer nunca são injetados por JS |
| S07 | Uma futura versão pt-BR será uma cópia dos 5 arquivos em `/pt/`, reaproveitando o mesmo CSS e JS. Para viabilizar isso, o CSS não pode ter largura fixa em botão, título ou card — o layout precisa tolerar textos mais longos |
| S08 | Header passa a usar marca tipográfica (D27), que não depende do arquivo da logo. O símbolo fica reservado para usos grandes e entra assim que o PNG recortado existir. O site não fica bloqueado pela pendência #11 |
| S09 | Cores da marca separadas em duas camadas: **brutas** (`--brand-*`, só grafismo, proibidas em texto) e **de interface** (`--action`, `--action-lift`, `--accent`, todas verificadas em AA). Dois gradientes com usos que não se misturam: `--gradient-text` (pontas aprovadas em contraste, para a palavra destacada) e `--gradient-glow` (decorativo, `aria-hidden`) |
| S10 | Hierarquia passa a se apoiar em **luminância**, não em matiz. Regra dura: o botão primário é o único elemento do site com fundo saturado preenchido — nenhum card, faixa, tag ou ícone pode ter. E o hover **clareia**, porque escurecer derrubaria o rótulo para 4.1:1 |
| S11 | Cada um dos 2 serviços recebe tratamento ampliado (título em `display-md`, 3–4 frases, lista de entregáveis) e a página ganha uma seção "Como trabalhamos" com 4 etapas. Duas linhas densas sustentam a página; duas linhas magras não |
| S13 | Tema claro ganhou conjunto próprio de tokens, todos reverificados: `--action #1E5FCC` (5.4:1), `--action-lift #17499E` (7.7:1), `--accent #9A2BC0` (5.5:1), `--alert #C41E1E` (5.3:1). Três regras invertem entre os temas — o hover do botão escurece em vez de clarear, o texto do botão passa a branco (por isso o token `--on-action`), e as formas decorativas clareiam. Os componentes só usam papéis semânticos, então nenhuma regra de CSS é duplicada |
| ~~S14~~ | ~~Símbolo dentro de contêiner escuro no tema claro~~ — **desnecessária**, retirada junto com P15 |
| S28 | **O título passou a ser dimensionado pela coluna, não pela tela.** `.hero__copy` virou `container-type: inline-size` e o `font-size` do `<h1>` virou `clamp(2.5rem, 15cqw, 8rem)` — com `var(--fs-display-xl)` declarado antes como fallback. Removida também a regra `font-size: clamp(3.875rem, 6vw, 4.875rem)` do bloco 1024–1199px, que media pela viewport e brigava com a nova. **Resultado:** 17 larguras de 320 a 2560px, folga mínima de 12% (era corte). O piso do `clamp` desceu de 2,75rem para 2,5rem — o valor da design.md foi escrito para um hero de largura inteira |
| S27 | O `.claude/check.js` passou a cruzar todo `animation:` com os `@keyframes` declarados e falhar se algum não resolver. É a defesa contra uma falha que não aparece no console e se manifesta como conteúdo invisível |
| S26 | **A maquete passou a escalar como uma peça só.** `.hero-demo__viewport` virou `container-type: inline-size`, e tipografia, espaçamento e cartões decorativos dentro dela passaram a `cqw` — cada regra declara o valor em `rem` antes, como fallback para navegadores sem container queries. Assim o conteúdo acompanha a moldura em qualquer largura, em vez de concordar com ela numa só. O `line-height` do título subiu de `.93` para `1.08` e o `max-width` de 9ch para 16ch, para caber em 2 linhas. **Regra que fica:** entrelinha abaixo de 1 só é segura em tipografia display grande — se o mesmo texto encolhe, precisa de piso. Verificado em 14 larguras de 320 a 2560px: zero transbordo, título sempre em 2 linhas, cartão de gráfico entre 29% e 35% da moldura |
| S25 | A janela de progresso passou a ser a **altura inteira do track**, não a distância presa. Como o track seguinte começa exatamente onde o anterior termina, o progresso chega a 1 no instante em que o próximo card pousa na linha sticky. Curva verificada: 1,000 → 0,985 → 0,970 → 0,955 → 0,940 ao longo de um track, sem zona morta |
| S24 | **Imagens precisam chegar como arquivo, não coladas no chat.** Ao receber uma, procurar também por extensão dupla (`.jpg.jpg`) — o Windows acrescenta a extensão quando "ocultar extensões conhecidas" está ligado. Recorte para os cards: gerar as três âncoras (esquerda/centro/direita), **olhar as três**, e escolher a que não corta logo nem palavra ao meio. Aqui venceu a ancorada à esquerda |
| S22 | Reparo feito relendo em UTF-8, reconvertendo por Windows-1252 e regravando sem BOM. Regra registrada em @CLAUDE.md: **nunca** editar os HTML com `Get-Content`/`Set-Content` do PowerShell 5.1 |
| S23 | Gerada `assets/img/logo.png` em 128×128 (**12 KB**, 2× para exibição a 64px). O arquivo original de 1024px ficou como `logo-full.png`, para usos grandes futuros |
| S17 | Regras de ocultar CTA passaram a usar seletor de 2 classes — `.nav .nav__cta` e `.header__actions .header__cta` — para vencer `.btn`, que carrega depois. **Regra geral:** ao esconder algo que também é `.btn`, uma classe só não basta |
| S18 | `.wordmark` e `.header__actions` ganharam `position: relative; z-index: 45` no mobile, acima do overlay (40). Sem isso o menu é uma armadilha |
| S19 | O estado escondido do `.reveal` foi movido para `[data-armed]`, atributo que **só o `js/reveal.js` aplica**. Sem JS, nada fica escondido. Princípio: conteúdo nunca depende de script para ficar visível |
| S20 | O observer passou a tratar também o caso `!isIntersecting && boundingClientRect.bottom < 0` — elemento já ultrapassado é revelado na hora, sem animação. E, na inicialização, o que já está acima da dobra nem chega a ser armado. Testado com saltos de scroll em 5 páginas: zero elementos invisíveis |
| S21 | `min-height: 44px` em alternador, logotipo, links do rodapé, e-mail, social e `.link`. Nos links do rodapé o `gap` foi zerado, porque agora o próprio padding fornece o ritmo visual. Verificados 103 alvos em 6 páginas: nenhum abaixo de 44×44 |
| S16 | **Tamanho mínimo do símbolo: 64px.** Abaixo disso ele não é usado. Header usa a marca tipográfica (D27); rodapé usa o símbolo a 64px ou mais. Verificado por composição em 180, 120, 64 e 32px sobre os dois fundos |
| S15 | Script inline no `<head>` lê `localStorage` e `prefers-color-scheme` e aplica `data-theme` antes da primeira pintura. É a única exceção à regra de manter JS no fim do `<body>`, e está documentada como tal na seção 13 do design.md |
| S12 | A About compensa a ausência de equipe e métricas dando mais peso ao que resta: história em 3 parágrafos densos, 4 cards de valores com texto mais longo, e o elemento visual em escala maior. Se ainda assim ficar curta na revisão, a alternativa é fundir a About na Home e reduzir o site para 4 páginas — **decisão a tomar depois de ver a página montada**, não agora |

---

## Pendências

Bloqueiam a redação final da copy e o início do desenvolvimento. Espelhado na seção 9 de @specs/site.md.

**As 14 pendências originais estão resolvidas.** ✅

#1 (D26) · #2 (D22) · #3 (D29) · #4 (D24/D35) · #5 (D28) · #6 (D30) · #7 (D25) · **#8 (D39)** · #9 (D31) · #10 (D32) · **#11 (D38)** · #12 (D33) · #13 (D23) · #14 (D34)

**Novas — surgiram da verificação da logo e da construção:**

- [ ] **#16 — Baixar as fontes.** Archivo, Inter e JetBrains Mono em `.woff2`, subset latino, para `assets/fonts/`. Instruções completas em [`assets/fonts/README.md`](assets/fonts/README.md). Não consigo baixar binários daqui. Sem elas o site cai nas fontes do sistema e perde a identidade tipográfica, mas continua funcionando
- [ ] **#15 — Favicon.** Feito um provisório (D43): um `B` sobre violeta. Se quiser outra coisa, é decisão sua. Não bloqueia
- [x] ~~**#20 — Obsidian Ink no lugar do Halcyon**~~ ✅ **Adicionado em 07/08/2026** (D48), na `/work` e no Selected work da Home
- [ ] **#22 — Corrigir os fundamentos do Obsidian Ink.** ⚠️ **Ainda abertos** — reverifiquei no momento de adicionar: sem `<title>`, sem `lang` no `<html>`, sem meta description, sem canonical, sem favicon. Você havia optado por corrigir antes de publicar, depois pediu para adicionar mesmo assim; adicionei e mantenho o lembrete. Isso contradiz "Accessibility (WCAG AA)" e "On-page SEO", vendidos como entregáveis na página Services. O que já está certo no site: `<h1>` único e `alt` nas 14 imagens
  - Correção sugerida: `<html lang="en">`, `<title>Obsidian Ink — Custom tattoo studio in Wynwood, Miami</title>` e meta description com "A four-artist tattoo studio in Wynwood, Miami. Custom work only — no flash sheets, no repeats."
- [x] ~~**#21 — Limpar `assets/img`.**~~ ✅ Resolvida pelo usuário em 07/08/2026. Sobraram só os 4 arquivos do projeto. Nota: `logo-full.png` (1,5 MB) é o original de 1024px, guardado para usos grandes futuros — **não vai para o deploy**, o site usa apenas `logo.png` de 26 KB
- [ ] **#19 — Substituir Halcyon e Atlas.** ⚠️ **Atualizada em 07/08/2026:** o Halcyon sai quando o Obsidian entrar (#20). O **Atlas fica**, por decisão do usuário — a alternativa de removê-lo para deixar a `/work` 100% real foi apresentada e recusada, então segue um caso inventado ao lado dos reais, sem imagem e sem link. Manter os 3 cards preserva o empilhamento da Home com escalas 0,94 / 0,97 / 1,00
- [x] ~~**#18 — Imagem do card do BrightSmile.**~~ ✅ Resolvida em 06/08/2026. Print de 1896×946 salvo pelo usuário, recortado para 4:3 ancorado à esquerda (preserva logo, menu, título e CTAs inteiros) e otimizado para 1200×900, 93 KB. Ver P27
- [ ] **#17 — Testar o envio real do formulário.** Não enviei porque isso dispararia um e-mail de verdade para a sua caixa. Preencha e envie uma vez para confirmar que a chave do Web3Forms está ativa
- [ ] **#10 (reaberta no deploy) — trocar os `[PLACEHOLDER: production URL]`.** São 23 marcações em 7 arquivos, todas de URL absoluta para Open Graph, canonical e sitemap. `node .claude/check.js` lista quantas restam

**Reabrem quando houver o 1º projeto real:** #3 (preencher e descomentar as métricas) e #12 (trocar os placeholders por imagens reais).

---

## Próximos passos

1. ✅ **Site construído e verificado.** As 5 páginas, o 404, o CSS, o JS, o SEO e os assets estão prontos.
2. **Revisar a copy.** Escrevi todo o texto em inglês (D26) sem nenhuma afirmação factual verificável. Ele é seu para editar — é a parte que mais se beneficia da sua voz.
3. **Suas quatro ações:** baixar as fontes (#16), testar o envio do formulário (#17), decidir o favicon (#15) e, no deploy, preencher a URL de produção (#10).
4. **Decidir sobre P13:** agora que a About está montada, ela se sustenta como página própria ou é melhor fundi-la na Home e reduzir para 4 páginas? Esta era a decisão que dependia de ver a página pronta.
5. **Decidir sobre P14:** a `/work` tem 3 casos demonstrativos com imagens em `[PLACEHOLDER]`. Continua sendo o ponto mais fraco do site até existir um projeto real.

**Como rodar localmente:**

```bash
node .claude/dev-server.js
```

**Depois de mexer em header ou footer — obrigatório:**

```bash
node .claude/check.js
```

> Nenhum código foi escrito. O desenvolvimento não começa sem sua autorização.
