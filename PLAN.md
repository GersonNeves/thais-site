# Plano do Site — Thais Fontana | Psicóloga

Plano de reconstrução do site atual (`thaisFontanaPsi.html`) em Next.js, com foco em melhorar SEO, performance e design, mantendo todo o conteúdo/texto já escrito pela Thais.

## Stack

- **Next.js 16** (App Router, TypeScript) — SSR/SSG para SEO forte e controle total do `<head>`.
- **Hospedagem: Cloudflare** (Workers via `@opennextjs/cloudflare`) — passo a passo em [`DEPLOYMENT.md`](./DEPLOYMENT.md).
- Fontes **Roboto Serif** (títulos) e **Roboto** (corpo/UI) via `next/font/google` (self-hosted, sem request externo).
- Ícones desenhados à mão como SVG inline em `src/components/icons/Icons.tsx` — sem biblioteca de ícones (bundle mínimo, sem CSS externo). O ícone do WhatsApp usa o glifo oficial da marca (via [simple-icons](https://simpleicons.org/), CC0).
- Imagens via `next/image` (otimização automática, lazy loading, sem layout shift).

## Estrutura do site

Site de página única (single page), mesma abordagem do HTML atual, dividido em componentes:

1. **Header/Nav** — logo com ícone animado (galho), links âncora (Especialidades, Sobre Mim, Modalidades, FAQ, Contato), menu hamburguer mobile.
2. **Hero** — headline, subtítulo, foto da Thais, CTA para WhatsApp.
3. **Especialidades** — 6 cards: Crianças e Adolescentes, Adultos, Saúde da Mulher, Desenvolvimento Socioemocional, Acompanhamento Familiar, Terapia de Casal.
4. **Sobre Mim** — foto + biografia, formações (PUCPR, FIOCRUZ, PUCRS).
5. **Além da Clínica** — lado pessoal + citação de Winnicott.
6. **Psicoterapia** — bloco de destaque sobre abordagem psicanalítica.
7. **Modalidades** — 3 cards: Online, Urgência (Online), Presencial.
8. **FAQ** — 10 perguntas em accordion.
9. **Footer/CTA final** — chamada para contato, redes sociais, texto legal com CRP.
10. **Botão flutuante do WhatsApp**.

Todo o texto em português será migrado como está — sem alterações de conteúdo — para um arquivo de conteúdo separado (ex.: `lib/content.ts`), mantendo os componentes limpos e facilitando edições futuras de texto sem mexer em código/JSX.

## Design (v1 — histórico, superado pela Etapa 2 abaixo)

Versão inicial: manter a identidade visual do HTML original (paleta
verde-sálvia, tons acolhedores, tipografia Poppins), com fotos reais via
`next/image` e refino pontual de espaçamento/sombras. Essa versão funcionou
mas ficou visualmente genérica — ver diagnóstico e redesenho completo na
Etapa 2.

## Redesign (Etapa 2)

A primeira versão funcional ficou "genérica"/pouco profissional no visual.
Comparando com dois sites de referência do mesmo nicho (`juliaabelin.com.br`
e `anandaraza.com`), o diagnóstico foi:

1. Layout centralizado e uniforme em todas as seções, sem contraste — as
   referências usam layouts assimétricos em duas colunas (rótulo + título
   grande de um lado, texto do outro).
2. Uso excessivo de cards brancos com sombra (Especialidades, Modalidades,
   FAQ) — as referências usam divisórias finas (hairline) e espaço em branco,
   sem sombras.
3. Sem hierarquia tipográfica — tudo em Poppins com peso parecido. As
   referências combinam uma serifada de destaque nos títulos com rótulos
   pequenos em caixa alta (eyebrow labels).
4. O fundo com textura de folhas ligada o tempo todo em opacidade baixa lê
   como "papel de parede", não como elemento de marca intencional.
5. Nenhuma seção de contraste forte (bloco escuro cheio) para dar ritmo à
   página.
6. Botões grandes tipo pílula com sombra pesada — visual datado de landing
   page SaaS.
7. Fotos com moldura genérica, sem selo/etiqueta de credibilidade.

**Direção aprovada pelo usuário:**

- Adicionar uma fonte serifada (Fraunces) via `next/font/google` só para
  títulos, mantendo Poppins no corpo do texto.
- Remover a textura de fundo em mosaico; usar blocos de cor cheios por seção
  (creme / verde-sálvia / `--contrast` escuro) para dar ritmo.
- Adicionar pequenos rótulos em caixa alta acima dos títulos, reaproveitando
  apenas texto que já existe (nav/títulos de seção) — nenhum texto novo.
- Achatar os cards de Especialidades/Modalidades/FAQ (divisórias finas,
  numerais/ícones em contorno fino, sem sombra).
- Transformar a seção "Psicoterapia" no bloco escuro de ritmo, usando
  `--contrast`.
- Botões menores, com cantos mais retos e letter-spacing.
- Molduras de foto com borda fina + selo/etiqueta sobreposto (ex. "Atendimento
  Online").

**Logo em destaque:** o arquivo `logo.svg` (na raiz do projeto) é a mesma
ilustração do galho/"florescer" já implementada como `FlorescerIcon` em
`src/components/icons/Icons.tsx` — hoje usada pequena (~60px) no header e
rodapé. Segue para `public/logo.svg` como asset de marca canônico (útil
depois para o favicon). O ícone passa a ganhar destaque real: maior no
header, e como marca d'água grande e discreta em 1–2 seções (Hero e/ou Além
da Clínica/CTA final) — inspirado em como as duas referências usam sua
ilustração de marca.

Nenhuma mudança de conteúdo/texto ou de paleta de cores nesta etapa.

> Nota: a fonte serifada usada aqui (Fraunces) e o selo sobre a foto do Hero
> foram ajustados na Etapa 3 abaixo — ver detalhes lá.

## Ajustes finos (Etapa 3)

Rodada de polimento em cima do redesenho da Etapa 2:

- **Favicon com a marca**: `src/app/icon.svg` gerado a partir do mesmo
  desenho do `logo.svg`/`FlorescerIcon` — fundo `--contrast` (verde escuro)
  com o ícone em `--highlight` (verde claro), cantos arredondados. Também foi
  gerado `src/app/favicon.ico` (PNG 64×64 embutido em um contêiner ICO
  válido, montado sem dependências novas) para navegadores/contextos legados
  que ainda pedem `/favicon.ico` diretamente.
- **Selo removido do Hero**: o selo "Atendimento On-line" sobreposto à foto
  principal foi removido a pedido — a foto ficou mais limpa, só com a
  moldura fina.
- **Ordem no mobile**: no Hero, o texto agora sempre aparece acima da foto em
  telas estreitas (`order` explícito no CSS, abaixo de 992px).
- **Troca de fontes**: Fraunces → **Roboto Serif** (títulos) e Poppins →
  **Roboto** (corpo/UI), ambas via `next/font/google`. As variáveis CSS
  foram renomeadas de `--font-fraunces`/`--font-poppins` para
  `--font-serif`/`--font-sans` (nomes semânticos, não presos a uma fonte
  específica) em todos os componentes que as referenciam.
- **Ícone do WhatsApp real**: o botão flutuante usava um ícone genérico de
  "balão de chat" (`ChatIcon`); agora usa o glifo oficial do WhatsApp
  (`WhatsappIcon` em `src/components/icons/Icons.tsx`, path obtido do
  [simple-icons](https://simpleicons.org/), licença CC0) sobre o mesmo
  círculo verde da marca.

Nenhuma mudança de conteúdo/texto ou de paleta de cores nesta etapa também.

## SEO

- Next.js Metadata API por página (title, description, Open Graph, Twitter Card) — já existe uma boa base de title/description/keywords no HTML atual.
- Dados estruturados (JSON-LD) com schema.org `Psychologist`/`ProfessionalService` + `Person`, incluindo CRP, formações e links de redes sociais.
- `sitemap.xml` e `robots.txt` gerados automaticamente.
- `alt` descritivo em todas as imagens.
- Performance forte (SSR + imagens/fontes otimizadas) para bons Core Web Vitals/Lighthouse.
- Se houver atendimento presencial em uma cidade/região específica, incluir isso no texto e no schema `LocalBusiness` para SEO local.

## Informações pendentes (preencher quando disponíveis)

- Número real de WhatsApp (placeholder atual: `5500000000000`).
- Número de registro no CRP (placeholder atual: `CRP XX/XXXXX`).
- URLs reais do Instagram e LinkedIn (atualmente `#`).
- Cidade/região de atendimento presencial, se houver (para SEO local).
- Domínio do site — ainda a definir (decisão adiada para a etapa de deploy).
- Segunda foto: hoje o Hero e a seção "Sobre Mim" reaproveitam a mesma foto
  (`public/images/thais.jpg`) com enquadramentos diferentes; uma segunda foto
  traria mais variedade visual entre as duas seções.
- Apple touch icon (`apple-icon.png`, usado ao salvar o site na tela inicial
  do iPhone) — ainda não gerado; pode reaproveitar a mesma arte do favicon.

## Próximos passos

1. ~~Criar o projeto Next.js~~ — concluído.
2. ~~Reconstruir cada seção como componente~~ — concluído.
3. ~~Adicionar a camada de SEO~~ — concluído.
4. ~~Redesign (Etapa 2)~~ — concluído.
5. ~~Ajustes finos (Etapa 3)~~ — concluído.
6. Preencher as informações pendentes listadas acima (WhatsApp, CRP, redes
   sociais, etc.) assim que estiverem disponíveis.
7. Deploy (Cloudflare + domínio) — passo a passo em [`DEPLOYMENT.md`](./DEPLOYMENT.md).
