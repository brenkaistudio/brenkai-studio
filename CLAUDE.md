# Brenkai Studio — Site institucional

Estúdio de desenvolvimento web. Este é o arquivo principal do projeto e deve ser lido sempre que esta pasta for aberta.

---

## Fontes de verdade

Leia os três antes de qualquer trabalho de implementação:

- **@specs/site.md** — o que precisa ser construído: escopo, páginas, seções, funcionalidades, requisitos.
- **@specs/design.md** — como deve parecer: direção visual, paleta, tipografia, espaçamento, movimento.
- **@memoria.md** — histórico vivo: decisões aprovadas e rejeitadas, pendências, próximos passos.

---

## Regra de contradição (obrigatória)

> Se algum pedido meu contradisser uma decisão registrada em @specs/site.md, @specs/design.md ou @memoria.md, pare e me avise antes de realizar qualquer alteração. Explique qual decisão seria afetada e pergunte se desejo substituí-la.

---

## Regras gerais de trabalho

- Não altere a stack técnica sem minha autorização.
- Não remova uma decisão aprovada silenciosamente.
- Não invente informações comerciais, médicas ou técnicas sobre o produto.
- Sempre preserve a consistência visual e estrutural entre as seções.
- Antes de uma mudança grande, apresente um plano resumido.
- Depois de uma decisão importante aprovada, atualize @memoria.md.

---

## Instruções essenciais do projeto

**Marca:** Brenkai Studio — estúdio de desenvolvimento web. Equipe de 3: Kaique, Brian e Renato. Copy em "we".
**Serviços:** apenas dois — Websites & Landing Pages e UI/UX Design. **Não** mencionar e-commerce, SEO ou manutenção contínua (D23).
**Idioma do site:** inglês apenas (`lang="en"`). Estes documentos internos ficam em português.
**Estrutura:** site multipáginas, 5 páginas — Home, Services, Work, About, Contact.
**Objetivo:** portfólio e credibilidade. Sucesso = o visitante confiar na marca.
**CTA principal:** `Start a project` → formulário na página Contact. É o único CTA primário do site; não crie CTAs primários concorrentes.
**Stack:** HTML + CSS + JavaScript puro. Sem framework, sem build, sem dependência npm. Travada — ver primeira regra acima.

### Regras da stack sem build

- **Sem framework, sem bundler, sem npm.** Nenhuma biblioteca externa, nenhum CDN. Tudo servido do próprio projeto.
- **JavaScript é progressivo.** O site funciona com JS desativado, exceto o envio assíncrono do formulário e o menu mobile. Nada de conteúdo renderizado por JS.
- **Header e footer são duplicados nos 5 arquivos HTML.** É intencional — decisão D18. Ao alterar o menu, o logotipo, os links sociais ou o footer, atualize os 5 arquivos e **rode `node .claude/check.js`** antes de encerrar. Nunca injete header ou footer via JS.
- **Conteúdo nunca depende de JS para ficar visível.** O estado escondido do `.reveal` mora em `[data-armed]`, que só o `js/reveal.js` aplica. Não escreva CSS que esconda conteúdo por padrão esperando que um script o revele.
- **Ao esconder algo que também é `.btn`, use seletor de duas classes.** `components.css` carrega depois de `layout.css`, então `.btn { display: inline-flex }` vence qualquer `.minha-classe { display: none }` de classe única.
- **Rodar localmente:** `node .claude/dev-server.js` → http://localhost:4321. Módulos ES não funcionam sobre `file://`.
- **Nunca editar os HTML com `Get-Content`/`Set-Content` do PowerShell 5.1.** Ele lê como ANSI e grava como UTF-8, corrompendo `—`, `·` e `§` em duplo encode. Use as ferramentas de edição, ou `[System.IO.File]::ReadAllText/WriteAllText` com `UTF8Encoding($false)`.
- **CSS: custom properties + BEM.** Todos os tokens de @specs/design.md vivem em `css/tokens.css`. Nenhum valor de cor, tamanho, espaçamento ou raio escrito diretamente numa regra — sempre `var(--token)`.
- **Dois temas: escuro (padrão) e claro.** Nos componentes, use **exclusivamente os papéis semânticos** (`--bg-card`, `--text-body`, `--border`, `--on-action`), nunca tokens brutos (`--ink-800`, `--action`). É o que permite trocar de tema sem duplicar nenhuma regra. Toda cor nova precisa ser verificada em contraste **nos dois temas** antes de entrar.
- **Nomes BEM:** `.bloco`, `.bloco__elemento`, `.bloco--modificador`. Um arquivo CSS por seção.
- **Ícones:** SVG inline ou sprite próprio. Sem biblioteca de ícones.

### Conteúdo: regra crítica

O projeto **não tem nenhum conteúdo real ainda** — sem textos finais, sem projetos de portfólio reais, sem imagens próprias.

- Todo texto, número, nome de cliente, case, métrica ou depoimento deve ser escrito como `[PLACEHOLDER: descrição do que falta]`.
- **Nunca** invente estatísticas ("20+ projetos", "98 de PageSpeed", "100% de retenção"), nomes de clientes, anos de fundação ou depoimentos — nem como exemplo temporário sem marcação.
- Todo placeholder novo entra na seção **Pendências** de @memoria.md no mesmo commit.

### Assets confirmados

- **Logo:** `assets/img/logo.png` (192×192, com canal alfa, 26 KB). Original em 1024px preservado como `logo-full.png`.
  - **Header:** símbolo a **44px** ao lado da marca tipográfica `BRENKAI` + `studio` (D44).
  - **Rodapé:** símbolo a **96px**.
  - **Mínimo absoluto:** 44px acompanhado do nome, **64px se aparecer sozinho** (D40). Abaixo disso vira mancha — não use o símbolo no favicon.
- **Web3Forms access key:** `5a1f5b7c-4b81-42f7-aa3e-ac6ec1987533` — vai no `<input type="hidden" name="access_key">`. É pública por design do serviço.

### Referências

`Ideiasbrenkai/` contém 4 screenshots e 1 link de um site anterior do Brenkai Studio. Serve **apenas** como direção de estrutura e atmosfera. Não reutilize textos, logotipo, imagens, elementos de marca nem layouts idênticos. A identidade definida em @specs/design.md é a original do projeto e prevalece sobre a referência em qualquer conflito.
