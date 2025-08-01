import apiEndpoints from "./api_endpoints.js";


// Função para criar os cards dos endpoints
function createEndpointCards() {
    const container = document.getElementById('endpoints-container');

    apiEndpoints.forEach(endpoint => {
        const card = document.createElement('div');
        card.className = 'endpoint-card';

        // Header do card
        const header = document.createElement('div');
        header.className = 'endpoint-header';

        const method = document.createElement('div');
        method.className = `method ${endpoint.method.toLowerCase()}`;
        method.textContent = endpoint.method;

        const path = document.createElement('div');
        path.className = 'path';
        path.textContent = endpoint.path;

        const desc = document.createElement('div');
        desc.className = 'description';

        if (endpoint.authRequired) {
            const authBadge = document.createElement('span');
            authBadge.className = 'auth-required';
            authBadge.textContent = 'Autenticação requerida';
            desc.appendChild(authBadge);
        }

        const expandIcon = document.createElement('div');
        expandIcon.className = 'expand-icon';
        expandIcon.innerHTML = '▼';

        header.appendChild(method);
        header.appendChild(path);
        header.appendChild(desc);
        header.appendChild(expandIcon);

        // Conteúdo expandido do card
        const content = document.createElement('div');
        content.className = 'endpoint-content';

        // Descrição do endpoint
        const description = document.createElement("h5")
        description.textContent = endpoint.description;
        description.className = "descricao"
        content.appendChild(description)

        // Seção de Request Body
        if (Object.keys(endpoint.requestBody).length > 0) {
            const bodyTitle = document.createElement('h3');
            bodyTitle.className = 'section-title';
            bodyTitle.textContent = 'Request Body';

            const bodyCode = document.createElement('pre');
            bodyCode.className = 'code-block';
            bodyCode.textContent = JSON.stringify(endpoint.requestBody, null, 2);

            content.appendChild(bodyTitle);
            content.appendChild(bodyCode);
        }

        // Seção de Headers
        if (endpoint.requestHeaders && Object.keys(endpoint.requestHeaders).length > 0) {
            const headersTitle = document.createElement('h3');
            headersTitle.className = 'section-title';
            headersTitle.textContent = 'Headers';

            const headersCode = document.createElement('pre');
            headersCode.className = 'code-block';
            headersCode.textContent = JSON.stringify(endpoint.requestHeaders, null, 2);

            content.appendChild(headersTitle);
            content.appendChild(headersCode);
        }

        // Seção de Responses
        const responsesTitle = document.createElement('h3');
        responsesTitle.className = 'section-title';
        responsesTitle.textContent = 'Responses';
        content.appendChild(responsesTitle);

        const responsesContainer = document.createElement('div');

        endpoint.responses.forEach(response => {
            const responseItem = document.createElement('div');
            responseItem.className = 'response-item';

            const responseHeader = document.createElement('div');
            responseHeader.className = 'response-header';

            const code = document.createElement('span');
            code.className = `response-code response-${response.code}`;
            code.textContent = response.code;

            const responseDesc = document.createElement('span');
            responseDesc.textContent = response.description;

            const responseExpandIcon = document.createElement('span');
            responseExpandIcon.className = 'response-expand-icon';
            responseExpandIcon.innerHTML = '▼';

            responseHeader.appendChild(code);
            responseHeader.appendChild(responseDesc);
            responseHeader.appendChild(responseExpandIcon);

            const responseBody = document.createElement('div');
            responseBody.className = 'response-body';

            const responseBodyCode = document.createElement('pre');
            responseBodyCode.className = 'code-block';
            responseBodyCode.textContent = typeof response.body === 'string'
                ? response.body
                : JSON.stringify(response.body, null, 2);

            responseBody.appendChild(responseBodyCode);

            responseItem.appendChild(responseHeader);
            responseItem.appendChild(responseBody);

            // Adiciona evento de clique para expandir/recolher o body da resposta
            responseHeader.addEventListener('click', () => {
                responseBody.classList.toggle('expanded');
                responseHeader.classList.toggle('response-expanded');
            });

            responsesContainer.appendChild(responseItem);
        });

        content.appendChild(responsesContainer);

        // Adiciona elementos ao card
        card.appendChild(header);
        card.appendChild(content);

        // Adiciona evento de clique para expandir/recolher
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });

        // Adiciona card ao container
        container.appendChild(card);
    });
}

// Inicializa a página quando carregada
document.addEventListener('DOMContentLoaded', createEndpointCards);