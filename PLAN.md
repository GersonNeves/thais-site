# Plano do Site — Thais Fontana | Psicóloga

Plano de reconstrução do site atual (`thaisFontanaPsi.html`) em Next.js, com foco em melhorar SEO, performance e design, mantendo todo o conteúdo/texto já escrito pela Thais.

## Stack

- **Next.js** (App Router, TypeScript) — SSR/SSG para SEO forte e controle total do `<head>`.
- **Hospedagem: Cloudflare** (Pages/Workers) — detalhes de deploy a definir em etapa posterior.
- Fonte **Poppins** via `next/font/google` (self-hosted, sem request externo).
- Ícones via `lucide-react` no lugar do FontAwesome via CDN (bundle menor, sem CSS externo).
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

## Design

Manter a identidade visual atual (paleta verde-sálvia, tons acolhedores, tipografia Poppins), com melhorias:

- Fotos reais da Thais (hero + "Sobre Mim") — **já disponíveis**, integradas via `next/image`.
- Substituir o background de mosaico (atualmente referenciado mas inexistente) por um SVG orgânico leve (blob/formas), mantendo a estética sem depender de imagem pesada.
- Pequenas animações de entrada ao rolar a página (scroll-reveal), respeitando `prefers-reduced-motion`.
- Refino de espaçamento, sombras dos cards e hierarquia visual.

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

## Próximos passos

1. Criar o projeto Next.js (App Router, TypeScript, estrutura de pastas para componentes e conteúdo).
2. Reconstruir cada seção como componente, com o texto original e as fotos reais.
3. Adicionar a camada de SEO (metadata, JSON-LD, sitemap/robots).
4. Passo de polimento visual (animações, ícones, carregamento de fonte).
5. Planejamento de deploy (Cloudflare + domínio) — etapa futura, a discutir separadamente.
