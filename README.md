# Landing Page - Código Secreto (Versão Estática)

Esta é uma versão otimizada da landing page "Código Secreto", construída com HTML, CSS e JavaScript puros para máxima performance e velocidade de carregamento.

## 🚀 Como Usar

1.  **Hospedagem:**
    *   Você pode hospedar estes arquivos em qualquer servidor estático (Vercel, Netlify, GitHub Pages, Amazon S3, etc.).
    *   Basta fazer o upload dos arquivos `index.html`, `style.css` e `script.js`.

2.  **Imagens:**
    *   As imagens atualmente estão linkadas diretamente do site original (`autofintech.com.br`).
    *   **Recomendação:** Para garantir que o site continue funcionando caso o original saia do ar, baixe as imagens e salve-as na mesma pasta, atualizando os links no `index.html`.

3.  **Rastreamento (Tracking):**
    *   O script do Trajettu já está incluído no `<head>` conforme solicitado:
        ```html
        <script defer src="https://api.trajettu.com/sdk/tracker.js?key=site_JuDpH2aZ_xJNYa58EgtRKlTl"></script>
        ```

4.  **Formulário:**
    *   O formulário está configurado para enviar os dados para a API da Trajettu (`https://api.trajettu.com/public/forms/...`).
    *   O script (`script.js`) lida com a submissão, formatação dos dados (nome, e-mail minúsculo, telefone com DDI) e exibe mensagens de sucesso ou erro.

## ⚡ Otimizações Realizadas

*   **Sem WordPress/Elementor:** Código limpo sem o "inchaço" de plugins e temas pesados.
*   **Carregamento Rápido:** CSS e JS minificados (conceitualmente, o código é enxuto).
*   **Responsividade:** Layout adaptável para celulares, tablets e desktops.
*   **SEO Básico:** Meta tags de descrição e título incluídas.
*   **Performance:** Uso de fontes otimizadas e carregamento deferido de scripts.

## 🛠 Personalização

*   **Cores e Estilos:** Edite o arquivo `style.css` para alterar cores (`:root` variables) ou layout.
*   **Texto e Conteúdo:** Edite o arquivo `index.html`.
*   **Lógica do Formulário:** Edite o arquivo `script.js`.

---
Desenvolvido para alta conversão e velocidade.
