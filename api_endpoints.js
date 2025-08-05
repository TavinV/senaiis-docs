const apiEndpoints = [
    {
        method: 'POST',
        path: '/api/v1/login',
        description: 'Realiza o login de um usuário, retornando o objeto do usuário junto com um token JWT para validação.',
        authRequired: false,
        requestBody: {
            "login": "nome_silva12",
            "senha": "Senha@123"
        },
        responses: [
            {
                code: 200,
                description: 'Login efetuado com sucesso',
                body: {
                    "success": true,
                    "message": "Login efetuado com sucesso",
                    "data": {
                        "token": "<Token JWT>",
                        "usuario": {
                            "id": 1,
                            "nome": "Nome da Silva",
                            "login": "nome_silva12"
                        }
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 401,
                description: 'Credenciais inválidas',
                body: {
                    "success": false,
                    "message": "Login e/ou senha incorretos",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 403,
                description: 'Acesso negado',
                body: {
                    "success": false,
                    "message": "Acesso negado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 500,
                description: 'Erro interno do servidor',
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/:id',
        description: 'Retorna as informações de um usuário com base no id.',
        authRequired: false,
        requestBody: {

        },
        requestHeaders: {

        },
        responses: [
            {
                code: 200,
                description: 'Aluno encontrado',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "id": "5f8d0d55b54764421b7156c3",
                        "nome": "João da Silva",
                        "cargo": "Aluno",
                        "rg": "12.345.678-9",
                        "email": "joao.silva@escola.com",
                        "data_nascimento": "2005-03-15",
                        "curso": "Técnico em desenvolvimento de sistemas",
                        "turma": "I1PB1",
                        "horario_entrada": "07:30",
                        "matricula": "2023001234",
                        "createdAt": "2023-01-10T08:00:00Z",
                        "updatedAt": "2023-06-15T14:30:00Z"
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 500,
                description: 'Erro interno do servidor',
                body: {
                    "success": false,
                    "message": "Erro interno do servidor. <mensagem de erro do servidor>",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/:id/profile-picture',
        description: 'Busca a foto de perfil do aluno com id.',
        authRequired: false,
        requestBody: {},
        responses: [
            {
                code: 200,
                description: 'Foto enviada como arquivo',
                body: "Binary data (imagem)"
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/:rg/first-access',
        description: 'Busca o nome de usuário (login) e senha padrão de um usuário, para realizar o primeiro acesso ao sistema.',
        authRequired: false,
        requestBody: {},
        responses: [
            {
                code: 200,
                description: 'Usuario encontrado',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "nome": "João da Silva",
                        "login": "joao_silva12",
                        "senha": "senai117@0102"
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/me/access',
        description: 'Envia a url do QR code para o acesso do usuário ao Senai.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 200,
                description: 'OK',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "url": "https://api.qrserver.com/v1/create-qr-code/?data=12345678&amp;size=100x100"
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 403,
                "description": "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/me/late-entries',
        description: 'Busca todos os atrasos do aluno logado.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 200,
                description: 'OK',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "atrasos": [
                            {
                                "id": "T5mN8pQ1",
                                "user_id": "5f8d0d55b54764421b7156c3",
                                "status": "Pendente",
                                "motivo": "",
                                "responsavel": "",
                                "observacao": ""
                            },
                            {
                                "id": "W9vB4zR7",
                                "user_id": "5f8d0d55b54764421b7156c3",
                                "status": "Validado",
                                "motivo": "Consulta médica",
                                "responsavel": "Carlos Souza",
                                "observacao": "O aluno apresentou atestado médico válido."
                            }
                        ]
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 403,
                "description": "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/me/late-entries/:id',
        description: 'Busca um atraso do id fornecido.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 200,
                description: 'OK',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "id": "T5mN8pQ1",
                        "user_id": "5f8d0d55b54764421b7156c3",
                        "status": "Pendente",
                        "motivo": "",
                        "responsavel": "",
                        "observacao": ""
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 403,
                "description": "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/me/early-exits',
        description: 'Busca pedido de liberação os atrasos do aluno logado.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 200,
                description: 'OK',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "liberacoes": [
                            {
                                "id": "LbPq9R2s",
                                "user_id": "5f8d0d55b54764421b7156c3",
                                "status": "Pendente",
                                "motivo": "Consulta odontológica",
                                "responsavel": "",
                                "horario_saida": null,
                                "observacao": "",
                                "timestamp": "2025-08-02T10:15:00.000Z"
                            },
                            {
                                "id": "V4lD7mN1",
                                "user_id": "5f8d0d55b54764421b7156c3",
                                "status": "Validado",
                                "motivo": "Prova em outra instituição",
                                "responsavel": "Ana Costa (Coordenação)",
                                "horario_saida": "2025-08-02T14:30:00.000Z",
                                "observacao": "Apresentou comprovante de matrícula no local da prova.",
                                "timestamp": "2025-08-01T09:00:00.000Z"
                            },
                            {
                                "id": "Np3Kt8wZ",
                                "user_id": "5f8d0d55b54764421b7156c3",
                                "status": "Não Permitido",
                                "motivo": "Saída antecipada para evento pessoal",
                                "responsavel": "Ricardo Alves (Segurança)",
                                "horario_saida": null,
                                "observacao": "Não há justificativa documentada para a liberação.",
                                "timestamp": "2025-08-02T08:45:00.000Z"
                            }
                        ]

                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 403,
                "description": "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'GET',
        path: '/api/v1/users/me/early-exits/:id',
        description: 'Busca um pedido de liberação do id fornecido.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 200,
                description: 'OK',
                body: {
                    "success": true,
                    "message": "",
                    "data": {
                        "id": "T5mN8pQ1",
                        "user_id": "5f8d0d55b54764421b7156c3",
                        "status": "Pendente",
                        "motivo": "",
                        "responsavel": "",
                        "observacao": ""
                    },
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 404,
                description: 'Usuário não foi encontrado',
                body: {
                    "success": false,
                    "message": "Usuário não foi encontrado",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 403,
                "description": "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                "code": 500,
                "description": "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    },
    {
        method: 'POST',
        path: '/api/v1/users/me/late-entries/request',
        description: 'Solicita o registro de um atraso para o usuário logado.',
        authRequired: true,
        requestBody: {},
        requestHeaders: {
            "Authorization": "Bearer <Token JWT>"
        },
        responses: [
            {
                code: 201,
                description: 'Atraso registrado com sucesso',
                body: {
                    "success": true,
                    "message": "Atraso registrado com sucesso. Compareça à secretaria para mais informações.",
                    "data": {
                        "codigo_atraso": "MFUSI9YX"
                    },
                    "timestamp": "2025-08-05T01:30:41.651Z"
                },
            },

            {
                code: 409,
                description: 'Atraso já registrado',
                body: {
                    "success": false,
                    "message": "Você já tem um atraso pendente. Regularize-o antes de solicitar outro.",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 403,
                description: "Token inválido / Expirado",
                body: {
                    "success": false,
                    "message": "Token inválido",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            },
            {
                code: 500,
                description: "Erro interno do servidor",
                body: {
                    "success": false,
                    "message": "Erro interno do servidor",
                    "data": {},
                    "timestamp": "2023-11-15T12:00:00.000Z"
                }
            }
        ]
    }
];

export default apiEndpoints