### Protecting routes:
PlugAI handles authentication related matters and it also exposes an auth guard ```canAccessProtectedRoutes``` that can be used to protect routes.

Here is an example of protected todo list routes: 
```typescript
export async function GET(req: NextRequest) {
    if (canAccessProtectedRoutes(req)) {
        // return response
    } else {
        // return unathorized error
    }
}
```

**Next step:** <a href="./documenting-api-routes.md" target="_blank">Documenting api routes</a>

**Other topics**
 - <a href="./initial-setup.md" target="_blank">Initial setup</a>
 - <a href="./auth-flows.md" target="_blank">Configuring auth flows</a>
 - <a href="./creating-api.md" target="_blank">Creating the application api</a>
 - <a href="./documenting-api-routes.md" target="_blank">Documenting api routes</a>