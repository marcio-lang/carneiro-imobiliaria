# Carneiro Inteligência Imobiliária - Landing Page

Landing Page moderna, elegante, responsiva e focada em alta conversão para captação de clientes interessados em compra, venda, locação e avaliação de imóveis.

Desenvolvida com a identidade visual premium da **Carneiro Inteligência Imobiliária**:
- **Dourado Primário**: `#D4AF37` (com gradientes metálicos e efeitos de iluminação)
- **Preto Secundário**: `#0D0D0D`
- **Fundo**: `#111111`
- **Tipografia**: Playfair Display, Cinzel, Montserrat e Inter

---

## 🚀 Tecnologias Utilizadas

- **Next.js 16 (App Router)** & **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons**
- **React Hook Form** + **Zod** (Validação completa e máscara brasileira de WhatsApp)
- **Canvas Confetti** (Feedback interativo de envio de avaliação)
- **SEO Otimizado & Schema.org RealEstateAgent**

---

## 🏛 Estrutura das Seções

1. **Header / Navbar**: Fixa com backdrop blur, dados de CRECI e horário, links de rolagem suave e botão de WhatsApp.
2. **Hero Section**: Apresentação visual majestosa com logotipo centralizado em relevo dourado, headline impactante, subheadline e botões primário/secundário.
3. **Métricas de Autoridade**: Volume negociado (+R$ 180M), anos de experiência (+12 anos), imóveis conduzidos e nota 4.9/5 no Google.
4. **Diferenciais Competitivos**: 6 pilares estratégicos (Avaliação Inteligente, Atendimento Personalizado, Agilidade, Segurança Jurídica, Estratégia Comercial, Rede de Relacionamentos).
5. **Sobre o Corretor**: Apresentação com foto executiva fotorrealista, credenciais de CRECI e narrativa de mercado.
6. **Imóveis em Destaque**: Grid com filtros por categoria e **Modal Interativo de Detalhes** com galeria de fotos e botão direto para WhatsApp com mensagem personalizada para o imóvel.
7. **Avaliação Gratuita**: Formulário com validação Zod, máscara de telefone brasileira e botão instantâneo de continuação pelo WhatsApp.
8. **Google Reviews**: Cabeçalho `[LOGO CARNEIRO] ⭐ 4.9/5 Google Reviews` com carrossel dinâmico de depoimentos verificados.
9. **Depoimentos em Destaque**: Citações reais de clientes com classificação 5 estrelas.
10. **CTA Final**: Chamada de alta conversão para compra, venda e agendamento.
11. **Rodapé Completo**: Redes sociais, CRECI, contatos diretos, endereço e política de privacidade.
12. **WhatsApp Flutuante**: Botão fixo no canto inferior com balão de boas-vindas e pulso de atenção.

---

## ⚙️ Como Executar o Projeto

```bash
# Instalar dependências (caso não estejam instaladas)
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📱 Configuração de Contatos

Para alterar número de telefone, WhatsApp, CRECI, e-mail ou redes sociais, edite o arquivo centralizado:
`src/data/siteConfig.ts`
