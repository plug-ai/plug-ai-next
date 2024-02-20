import { createSwaggerSpec } from 'next-swagger-doc';
import { OpenAPIConfig, PluginAuthType } from '@plug-ai/plug-ai-core';

const base_spec = createSwaggerSpec({
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
        
    },
});

const oauth_auth = {
    components: {
        securitySchemes: {
            "OAuth2": {
                type: 'oauth2',
                flows: {
                    authorizationCode: {
                        authorizationUrl: `${process.env.BASE_URL}${process.env.AUTHORIZATION_URL}`,
                        tokenUrl: `${process.env.BASE_URL}${process.env.TOKEN_URL}`,
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
}

const service_level_auth = {
    security: [
        {
            "OAuth2": []
        }
    ]
}

export const getApiDocs = async (authType: PluginAuthType) => {
    let spec;

    console.log('authtype: ', authType);

    switch (authType) {
        case PluginAuthType.None:
            spec = base_spec;
            break;
        case PluginAuthType.ServiceHttp:
            spec = {
                ...base_spec,
                ...service_level_auth
            }
            break;
        case PluginAuthType.OAuth:
            console.log('using oauth')
            spec = {
                ...base_spec,
                ...oauth_auth
            }
            break;
        default:
            spec = base_spec;
    }

    console.log(spec);

    return spec as Promise<OpenAPIConfig>;
};
