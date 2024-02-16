import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: 'app/api',
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Next Swagger API',
                version: '1.0',
            },
            servers: [
                {
                    url: process.env.BASE_URL || 'http://localhost:3000',
                    description: 'Test',
                },
            ],
            components: {
                securitySchemes: {
                    "OAuth2": {
                        type: 'oauth2',
                        flows: {
                            authorizationCode: {
                                authorizationUrl: 'https://plugai.loca.lt/api/plugin/authorize',
                                tokenUrl: 'https://plugai.loca.lt/api/plugin/oauth/token',
                                scopes: {}
                            }
                        }
                    }
                },
                schemas: {}
            },
            security: [
                {
                    "OAuth2": []
                }
            ]
        },
    });

    return spec as Promise<{ openapi: string; paths: Record<string, any>; info: { title: string; version: string } }>;
};
