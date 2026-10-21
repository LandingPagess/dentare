# DENTARE

Fundação da landing page da DENTARE Odontologia Especializada, em Astro 7 e Tailwind CSS 3 via PostCSS.

## Desenvolvimento

Use Node.js 22.22 ou superior.

```sh
npm install
npm run dev
```

## Validação e produção

```sh
npm run build
npm run preview
```

O build executa a verificação de tipos do Astro antes de gerar o site estático.

## Estrutura

- `src/data/dentare.json`: conteúdo, contato, procedimentos, depoimentos e FAQ.
- `tailwind.config.mjs`: cores, tipografia e tokens visuais.
- `src/layouts/Layout.astro`: documento HTML, SEO, fontes, dados estruturados e Tailwind global.
- `src/components/Header.astro`: navegação fixa, horário oficial e menu mobile com diálogo acessível.
- `src/components/Hero.astro`: abertura editorial com fotografia humana responsiva, iluminação suave e selo flutuante das especialidades.
- `src/components/Diferenciais.astro`: bento assimétrico, com destaque amplo de tecnologia 3D e três pilares compactos.
- `src/components/Tratamentos.astro`: especialidades com destaques técnicos, benefícios e mensagens de WhatsApp por procedimento.
- `src/components/Depoimentos.astro`: três depoimentos integrais, estrelas e destaque de reputação informado pela clínica.
- `src/components/LocalizacaoFaq.astro`: endereço detalhado, horários, mapa e acordeão nativo de dúvidas frequentes.
- `src/components/Footer.astro`: navegação institucional, corpo clínico e informações de privacidade.
- `src/components/FloatingWhatsapp.astro`: conversão persistente com hover suave e espaço ao final da página no mobile.
- `src/components/Icon.astro`: ícones SVG, incluindo a marca preenchida do WhatsApp, sem dependências adicionais.
- `src/components/SectionDivider.astro`: divisória decorativa em gradiente entre as seções principais.
- `src/pages/index.astro`: composição completa da landing page.

O layout aceita `title`, `description`, `canonical`, `socialImage`, `socialImageAlt`, `class` e `bodyClass`. A URL de produção padrão é `https://dentare-theta.vercel.app`, configurada em `seo.siteUrl` no JSON. A variável de ambiente `SITE_URL` pode substituir esse domínio durante o build. O Astro usa essa base para canonical, `og:url` e a URL absoluta de `og:image`. A imagem padrão fica em `public/og-image.jpg` (JPEG de 1200 × 630); os textos e metadados de compartilhamento ficam em `seo.social`.

A nota Google, a contagem de avaliações e os depoimentos foram fornecidos pela clínica. Os depoimentos são preservados na íntegra; `highlight` contém um trecho destacado de cada relato. O quarto procedimento é Estética do Sorriso. A FAQ não fixa condições de parcelamento nem prazos clínicos individuais.

O endereço detalhado inclui Quadra 19, Lote 07, Edifício Ônix, Sala 102. `clinic.team` identifica o corpo clínico como Dr. Paulo Victor Ribeiro e equipe multidisciplinar. Números de registro profissional e outras identificações aguardam confirmação direta da clínica e foram removidos desta prévia. A localização também informa estacionamento no local e acessibilidade.

A fotografia do Hero é ilustrativa, de Harold Hisona no Unsplash, e não identifica profissionais ou pacientes da DENTARE. Fonte: https://unsplash.com/photos/dentist-talking-to-patient-in-a-modern-dental-office-Bg81yWKZlMg (Unsplash License). Os recortes WebP de 640, 1024 e 1440 pixels ficam em `public/images/`; caminhos, dimensões, texto alternativo e crédito estão em `hero.visual.image` no JSON.

A prévia usa uma única meta tag `robots` com `noindex, nofollow`, fixa no Layout.

O selo do WhatsApp consulta os horários oficiais em `America/Bahia`. Ele informa horário de atendimento ou convida ao envio de mensagem; `Online agora` só aparece se `floatingWhatsapp.confirmedOnline` for explicitamente `true`. Não há integração com presença do WhatsApp. A rolagem é nativa da janela, inclusive no mobile; o contêiner de rolagem `#site-content` foi removido. O `html` usa `scroll-padding-top: 5rem` para as âncoras e o fim da página reserva espaço para o botão flutuante. O bloqueio temporário da rolagem existe somente enquanto o menu modal está aberto. Abaixo de 1024px, o WhatsApp exibe apenas o botão circular; quando sua área (com margem de 8px) coincide com um link, controle ou mapa, o botão fica invisível até liberar essa ação. A checagem responde à rolagem, redimensionamento, carregamento de fontes e mudanças de tamanho do conteúdo, sem alterar a rolagem nativa.

## Dependências

A auditoria de 20/10/2026 não identifica alertas no Astro atualizado. Permanecem sete alertas na cadeia do Tailwind 3 (cinco altos e dois moderados), relacionados a processamento de padrões e seletores durante a compilação. O npm propõe Tailwind 4 para a correção completa; a versão 3 foi mantida conforme o escopo solicitado. Esses pacotes não são enviados ao navegador no site estático gerado.
