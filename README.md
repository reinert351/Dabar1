
# 🚀 Dabar AI - Manual de Lançamento Profissional

Este ecossistema foi projetado para ser **Offline-First**, escalável e monetizável via Hotmart.

## 📦 1. Deploy no Netlify (Hospedagem)

1.  Crie um novo site no **Netlify** a partir do seu repositório GitHub.
2.  **Environment Variables**:
    *   Vá em `Site Configuration` > `Environment Variables`.
    *   Adicione `API_KEY`: Sua chave do Google Gemini.
3.  **Snippet Injection** (Passo Vital para IA funcionar):
    *   Vá em `Site Configuration` > `Build & deploy` > `Post-processing` > `Snippet injection`.
    *   Adicione "Before </head>":
    ```html
    <script>window.process.env.API_KEY = "SUA_CHAVE_AQUI";</script>
    ```

## 💳 2. Integração Hotmart (Vendas)

1.  **Webhook**: Aponte o Webhook da Hotmart para a sua URL da Firebase Function (veja pasta `backend/`).
2.  O sistema de `entitlementService` já está pronto para validar o acesso localmente com um período de carência (Grace Period) de 7 dias se o usuário ficar sem internet.

## 📱 3. Transformação em App (WebIntoApp)

1.  Acesse [WebIntoApp.com](https://www.webintoapp.com/).
2.  Use a URL do seu site Netlify.
3.  **IMPORTANTE**: O app já possui `manifest.json` e `sw.js`. O WebIntoApp reconhecerá como uma PWA, o que melhora drasticamente a performance.
4.  Nas permissões, garanta que **Microphone** e **Camera** estejam ativos para o OCR e Coach de Voz.

## 🛠 Manutenção de Dados

*   O banco de dados **Titan v1.8** reside no navegador do usuário (IndexedDB).
*   Se você atualizar o Cânon, altere o `DB_VERSION` em `services/database.ts` para forçar uma migração nos clientes.

---
**Arquitetura por:** Senior Software Architect & Data Engineer
