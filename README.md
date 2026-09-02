# Thais Fontana — Psicóloga Clínica

Site institucional de página única (single page) da psicóloga Thais Fontana.

- **Produção:** https://thaisfontanapsi.com
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules
- **Hospedagem:** Cloudflare Workers, via o adaptador oficial [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)

---

## Começando

Requisitos: **Node.js 22 LTS** ou superior e npm 10+.

```bash
npm install
npm run dev
```

O site sobe em http://localhost:3000.

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload. |
| `npm run build` | Build de produção do Next.js (use para checar erros de tipo/compilação). |
| `npm run lint` | ESLint com a configuração `eslint-config-next`. |
| `npm run preview` | Compila para Cloudflare Workers e roda **localmente** no runtime real do Workers. Use isso antes de publicar — é o ambiente mais fiel à produção. |
| `npm run deploy` | Compila e publica direto na Cloudflare a partir da sua máquina. Ver [Deploy](#deploy). |

---

## Onde mexer em cada coisa

### Todo o texto do site fica em um arquivo só

**`src/content/site.ts`** concentra 100% do conteúdo editorial: headline, textos
das especialidades, biografia, modalidades de atendimento, perguntas do FAQ,
número de WhatsApp, CRP e links de redes sociais.

Para mudanças de copy, esse é o único arquivo que precisa ser tocado — não é
necessário abrir nenhum componente JSX. Os componentes apenas consomem esses
dados.

> ⚠️ **Atenção — conteúdo sob regulamentação.** Thais é psicóloga registrada no
> CRP, e a publicidade de serviços psicológicos no Brasil é regida pelo Código
> de Ética Profissional do CFP e pela Resolução CFP nº 10/2005. Isso proíbe,
> entre outras coisas: depoimentos de pacientes, promessas de resultado,
> comparativos "antes e depois", sensacionalismo e promoções/descontos. Qualquer
> alteração de copy ou estratégia de marketing precisa respeitar essas regras.

### Estrutura de pastas

```
src/
├── app/
│   ├── layout.tsx      # metadata (SEO, Open Graph), fontes, JSON-LD schema.org
│   ├── page.tsx        # monta a ordem das seções da página
│   ├── globals.css     # design tokens (paleta, tipografia) + estilos globais
│   ├── sitemap.ts      # sitemap.xml gerado automaticamente
│   ├── robots.ts       # robots.txt gerado automaticamente
│   └── icon.svg        # favicon
├── components/         # uma pasta por seção, cada uma com seu CSS Module
│   ├── Header/  Hero/  Especialidades/  Sobre/  AlemDaClinica/
│   ├── Psicoterapia/  Modalidades/  Faq/  Footer/
│   ├── WhatsappFloat/  Reveal/       # botão flutuante e animação de scroll
│   └── icons/Icons.tsx # todos os ícones como SVG inline (sem biblioteca)
├── content/site.ts     # ← TODO O TEXTO DO SITE
└── lib/                # utilitários (blur placeholders das imagens)

public/images/          # fotos da Thais e imagens de fundo
brand-assets/           # peças para redes sociais — ver brand-assets/README.md
```

### Design tokens

A paleta e a tipografia estão como CSS custom properties no topo de
`src/app/globals.css` (`--bg-soft`, `--highlight`, `--mid-tone`, `--text-dark`,
`--contrast`, `--white`). Alterar ali propaga para o site inteiro e para o
script de geração das peças em `brand-assets/`.

### Imagens

Todas passam por `next/image` com blur placeholder. Ao trocar uma foto em
`public/images/`, regenere o placeholder correspondente em
`src/lib/imagePlaceholders.ts` — caso contrário o blur exibido não corresponde
à nova imagem.

---

## Deploy

A branch `main` é a fonte da verdade: **todo push para `main` publica
automaticamente em produção** via GitHub Actions
(`.github/workflows/deploy.yml`).

### Configuração necessária no repositório

O workflow depende de dois secrets em **Settings → Secrets and variables →
Actions**:

| Secret | Onde obter |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token → template **"Edit Cloudflare Workers"**. |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → Workers & Pages → coluna da direita, "Account ID". |

### Deploy manual (alternativa)

Com o Wrangler autenticado na máquina (`npx wrangler login`):

```bash
npm run preview   # confere localmente no runtime do Workers
npm run deploy    # publica
```

### Configuração da Cloudflare

- `wrangler.jsonc` — nome do Worker, data de compatibilidade e binding de assets.
- `open-next.config.ts` — configuração do adaptador OpenNext.

O domínio `thaisfontanapsi.com` está ligado ao Worker `thais-site` como Custom
Domain (Cloudflare → Workers & Pages → `thais-site` → Settings → Domains &
Routes). O DNS e o certificado SSL são gerenciados pela própria Cloudflare.

### Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica usada em metadata, Open Graph, JSON-LD e `sitemap.xml`. Sem ela, o valor de fallback em `src/content/site.ts` é usado. |

---

## SEO

Já implementado e que convém não quebrar:

- Metadata API do Next.js (`title`, `description`, Open Graph, Twitter Card) em `src/app/layout.tsx`.
- JSON-LD com schema.org `Psychologist`, incluindo CRP e perfis sociais.
- `sitemap.xml` e `robots.txt` gerados no build.
- Renderização no servidor: todo o conteúdo textual está no HTML estático, visível para crawlers.
- Animações usam apenas `opacity`/`transform` e o Hero (candidato a LCP) não anima — sem Cumulative Layout Shift.
- `alt` descritivo em todas as imagens.

---

## Convenções

- **Branches:** trabalhe em `feat/...` ou `fix/...` e abra Pull Request para `main`. Push direto em `main` publica em produção imediatamente.
- **Antes de abrir PR:** `npm run lint && npm run build` devem passar.
- **Estilos:** CSS Modules por componente. Não há Tailwind nem biblioteca de UI — é CSS puro com custom properties.
- **Ícones:** SVG inline em `src/components/icons/Icons.tsx`. Não adicione bibliotecas de ícones.
