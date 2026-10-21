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
- `src/components/Hero.astro`: abertura editorial com ilustração vetorial de planejamento dental e CTAs dinâmicos.
- `src/components/Diferenciais.astro`: quatro pilares do cuidado em cards translúcidos, com grid de uma, duas ou quatro colunas.
- `src/components/Tratamentos.astro`: especialidades com destaques técnicos, benefícios e mensagens de WhatsApp por procedimento.
- `src/components/Depoimentos.astro`: três depoimentos integrais, estrelas e destaque de reputação informado pela clínica.
- `src/components/LocalizacaoFaq.astro`: endereço detalhado, horários, mapa e acordeão nativo de dúvidas frequentes.
- `src/components/Footer.astro`: navegação institucional, responsabilidade técnica e informações de privacidade.
- `src/components/FloatingWhatsapp.astro`: conversão persistente com faixa reservada no mobile, sem cobrir o conteúdo.
- `src/components/Icon.astro`: ícones SVG de traço linear, sem dependências adicionais.
- `src/pages/index.astro`: composição completa da landing page.

O layout aceita `title`, `description`, `canonical`, `socialImage`, `socialImageAlt`, `noindex`, `class` e `bodyClass`. Configure `site` em `astro.config.mjs` quando o domínio de produção estiver definido; o layout gera a URL canônica e `og:url` a partir dele. Também é possível fornecer `canonical` explicitamente. Sem domínio definido, essas tags são omitidas.

A nota Google, a contagem de avaliações e os depoimentos foram fornecidos pela clínica. Os depoimentos são preservados na íntegra; `highlight` contém um trecho destacado de cada relato. O quarto procedimento é Estética do Sorriso. A FAQ não fixa condições de parcelamento nem prazos clínicos individuais.

O endereço detalhado inclui Quadra 19, Lote 07, Edifício Ônix, Sala 102. `clinic.technicalResponsibles` contém os dois responsáveis técnicos, seus registros CRO/BA e especialidades, conforme os dados oficiais fornecidos pela clínica. A localização também informa estacionamento no local e acessibilidade.

O selo do WhatsApp consulta os horários oficiais em `America/Bahia`. Ele informa horário de atendimento ou convida ao envio de mensagem; `Online agora` só aparece se `floatingWhatsapp.confirmedOnline` for explicitamente `true`. Não há integração com presença do WhatsApp. No mobile, `#site-content` usa uma área de rolagem acima da faixa de conversão, para evitar sobreposição em qualquer posição da página.

## Dependências

A auditoria de 20/10/2026 não identifica alertas no Astro atualizado. Permanecem sete alertas na cadeia do Tailwind 3 (cinco altos e dois moderados), relacionados a processamento de padrões e seletores durante a compilação. O npm propõe Tailwind 4 para a correção completa; a versão 3 foi mantida conforme o escopo solicitado. Esses pacotes não são enviados ao navegador no site estático gerado.
