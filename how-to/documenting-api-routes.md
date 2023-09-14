#### Api documentation
In order to be used by ChatGPT, the application needs to provide a solid documentation of the api routes it wants ChatGPT to use. This project uses OpenAPI-style documentation for decorating routes. 

Here is an example of documented todo list api: 
```typescript

/**
 * @swagger
 * /api/todos:
 *   get:
 *     description: Gets a list of todo tasks
 *     responses:
 *       200:
 *         description: Returns a list of todo tasks.
 */
export async function GET(req: NextRequest) {
    // function body
}

/**
 * @swagger
 * /api/todos:
 *   post:
 *     description: Creates a todo task
 *     responses:
 *       201:
 *         description: Todo task has been created. The return data contains information about the created todo task.
 */
export async function POST(req: NextRequest) {
    // function body
}
```

Check this <a href="https://support.smartbear.com/swaggerhub/docs/tutorials/openapi-3-tutorial.html" target="_blank">guide</a> for details on creating OpenApi route documentation.

**Other topics**
 - <a href="./initial-setup.md" target="_blank">Initial setup</a>
 - <a href="./auth-flows.md" target="_blank">Configuring auth flows</a>
 - <a href="./creating-api.md" target="_blank">Creating the application api</a>
 - <a href="./protecting-api-routes.md" target="_blank">Protecting api routes</a>
