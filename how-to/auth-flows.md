## Configuring auth flows

An OpenAI Plugin application needs to define the type of authentication it wants to use. The supported types are:

```oauth``` | ```service_http``` | ```none```

Auth configuration is set up in the selected yaml config file.

### oauth
```yaml
# plugin-oauth.yaml
type: 'oauth'
  scope: 'read'
  verification_tokens:
    openai: 'Replace_this_string_with_the_verification_token_generated_in_the_ChatGPT_UI'
```

When using oauth, several environmental variables need to be defined:

```OAUTH_DOMAIN```

```OAUTH_API_AUDIENCE```  - note that not all oauth providers require the audience parameter

```PUBLIC_KEY```


Once these are provided, the application should be set up to use oauth flow. Now, route gurads can be used
to expose the application api to only authenticated users.

**NOTE**: Other oauth related parameters such as ```client_secret``` and ```client_id``` are provided to ChatGPT while registering the application. Read the following <a href="https://platform.openai.com/docs/plugins/authentication/oauth" target="_blank">document</a> for details. 

### service level
Service level is the type of authentication recommended by OpenAI plugin creation <a href="https://platform.openai.com/docs/plugins/authentication" target="_blank">guides</a>. 


```yaml
# plugin-service-http-auth.yaml
auth:
  type: 'http_service'
  verification_tokens:
    openai: 'Replace_this_string_with_the_verification_token_generated_in_the_ChatGPT_UI'
```

When using service level auth, just one environmental variables has to be defined:


``SERVICE_AUTH_KEY`` - this should be a randomly generated cryptographically secure string


You will be prompted to provide ``SERVICE_AUTH_KEY`` value to OpenAI during Plugin registration. Now the application is set up to use service level auth to protect the api routes.

### no authentication
```yaml
# plugin-no-auth.yaml
auth:
  type: 'none'
```
Your application's api will be open - OpenAI only supports this auth mode for localhost development of plugins.

**Next step:** <a href="./creating-api.md">Creating api</a>

**Other topics**
 - <a href="./initial-setup.md" target="_blank">Initial setup</a>
 - <a href="./creating-api.md">Creating api</a>
 - <a href="./protecting-api-routes.md" >Protecting api routes</a>
 - <a href="./documenting-api-routes.md" target="_blank">Documenting api routes</a>
