### Building your app:
Once the basic configuration and auth setup have been completed, proceed with implementing the actual API that will be used by OpenAI models.


Create request handlers in
```api``` folder just as you would in any other Next.js 13+ application. 

**NOTE:** there already exists ```plugin``` route, which is reserved for handling Plugin related requests. No other handlers should be created inside that route.

**Next step:** <a href="./protecting-api-routes.md" >Protecting api routes</a>

**Other topics**
 - <a href="./initial-setup.md" target="_blank">Initial setup</a>
 - <a href="./auth-flows.md" target="_blank">Configuring auth flows</a>
 - <a href="./protecting-api-routes.md" >Protecting api routes</a>
 - <a href="./documenting-api-routes.md" target="_blank">Documenting api routes</a>