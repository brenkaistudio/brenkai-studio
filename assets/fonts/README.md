# Fontes — precisam ser baixadas manualmente

O projeto usa fontes **self-hosted**. Não há CDN, não há `<link>` para o Google Fonts — é regra da stack (ver @CLAUDE.md).

Eu não consigo baixar arquivos binários daqui, então **esta parte é sua**. Enquanto os arquivos não existirem, o site cai nas fontes do sistema e continua totalmente funcional — só perde a identidade tipográfica.

## O que baixar

Baixe as versões **variáveis** em `.woff2` e coloque nesta pasta com exatamente estes nomes:

| Arquivo esperado | Fonte | Pesos usados |
|---|---|---|
| `archivo-variable.woff2` | [Archivo](https://fonts.google.com/specimen/Archivo) | 700–900 |
| `inter-variable.woff2` | [Inter](https://fonts.google.com/specimen/Inter) | 400–600 |
| `jetbrains-mono-variable.woff2` | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | 400–500 |

## Como obter o `.woff2` variável

O Google Fonts entrega `.ttf` no botão de download. Para converter e reduzir:

1. Acesse **google-webfonts-helper** (`gwfh.mranftl.com`) ou use `fonttools`.
2. Escolha o **subset `latin`** — sem isso o arquivo fica 3 a 4× maior à toa.
3. Formato **woff2**.
4. Renomeie conforme a tabela acima.

Se preferir converter localmente:

```bash
pip install fonttools brotli
pyftsubset Archivo[wdth,wght].ttf --output-file=archivo-variable.woff2 --flavor=woff2 --layout-features="*" --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215" 
```

## Depois de colocar os arquivos

Nada a fazer — o `@font-face` em [`css/base.css`](../../css/base.css) já aponta para estes caminhos. Só recarregue a página.

Se decidir usar outras fontes, isso contraria a **D07** e exige aviso antes, conforme a regra de contradição em @CLAUDE.md.
