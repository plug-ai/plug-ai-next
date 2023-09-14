## Introduction

In order to become an OpenAI plugin, an application needs to satisfy several conditions. For example, it needs to expose a plugin manifest file, document its own api and implement an authentication flow. When using PlugiAI package, meeting all these requirements boils down to setting up a single ``yaml`` configuration file.  

### Selecting the appropriate config file
``plug-ai-next`` has three preconfigured config files:

```
plugin-no-auth.yaml
plugin-oauth.yaml
plugin-service-http-auth.yaml
```

Select the config file depending on the authentiction flow used by the project: ``oauth`` | ``http_service`` | ``no-auth``. This is done at Plugin initialization <a href="../src/app/api/plugin/[...plugAi]/route.ts" target="_blank">file</a>, eg:

```typescript
const aiplug = new Plugin({
    configFilePath: PluginConfigPath.SERVICE_HTTP,
    getDocs: getApiDocs,
});
```

The mandatory fileds that need to be defined in  `config/plugin.yaml` are:

```yaml
name:
 human: The name of your application visible to human users.
 model: Name of the app supplied to ai models.

description:
 human: Description of your app visible to human users. 
 model: Description of your app read by ai models

auth:
  type: 'oauth' | 'http_service' | 'no-auth'
  authorization_type: 'bearer' (only for http_service)
  verification_tokens:
    openai: ''
```

**Next step:** <a href="./auth-flows.md" target="_blank">Configuring auth flows</a>

**Other topics**

 - <a href="./auth-flows.md" target="_blank">Configuring auth flows</a>
 - <a href="./creating-api.md" target="_blank">Creating the application api</a>
 - <a href="./protecting-api-routes.md" target="_blank">Protecting api routes</a>
 - <a href="./documenting-api-routes.md" target="_blank">Documenting api routes</a>

 auth:
  type: 'service_http'
  authorization_type: 'bearer'
  verification_tokens:
    openai: 'Replace_this_string_with_the_verification_token_generated_in_the_ChatGPT_UI'