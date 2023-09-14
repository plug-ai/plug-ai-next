<p align="center">
  <img src="public/logo.png" width="400" alt="PlugAI Logo" />
</p>

<p align="center">Reference ChatGPT Plugin Seed based on <a href="https://nextjs.org/" target="_blank">Next.js</a> to rapildly start your journey with OpenAI Plugin system.</p>

<p align="center">
<img src="https://img.shields.io/badge/version-0.0.1-blue" alt="Version" />
<img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
<img src="https://img.shields.io/badge/downloads-0-lightgreen" alt="Downloads" />
<img src="https://img.shields.io/badge/build-passing-green" alt="Build" />
<img src="https://img.shields.io/badge/coverage-0%25-red" alt="Coverage" />

</p>

## Description

The project demonstrates the implementation of ChatGPT OpenAI plugin as a Next.js application. With the rise of conversational AI and natural language processing, integrating ChatGPT into your application can provide a cutting-edge user experience.

This seed application offers a starting point for building an OpenAI plugin with various features. It aims to minimize the startup time needed to set up plugin structure.

## Installation

To get started:

1. Clone repository

```bash
$ git clone git@github.com:plug-ai/ai-plug-boilerplate.git
```

2. Install dependencies

```bash
$ npm install
```

3. Adjust <a href="config/plugin-service-http-auth.yaml" target="_blank">your plugin configuration</a>
4. Based on the chosen authentication mechanism, provide <a href="config/.env" target="_blank"> the required environment variables</a>

**NOTE**: By default, this seed application uses service level authentication method recommended by OpenAI <a href="https://platform.openai.com/docs/plugins/authentication/service-level" target="_blank"></a>. If you need the application to work with OAuth, <a href="https://auth0.com/" target="_blank">Auth0</a> is used under the hood - which requires that you to configure your application environment.

## Running the app

```bash
# development mode
$ npm run dev

# production mode
$ npm run build
$ npm run start
```

## How to guide

This step-by-step guide takes you through all the steps necessary to create a working Plugin:

1. <a href="how-to/initial-setup.md" target="_blank">Initial setup</a>
2. <a href="how-to/auth-flows.md" target="_blank">Configuring auth flows</a>
3. <a href="how-to/creating-api.md" target="_blank">Creating the application api</a>
4. <a href="how-to/protecting-api-routes.md" target="_blank">Protecting api routes</a>
5. <a href="how-to/documenting-api-routes.md" target="_blank">Documenting api routes</a>

## Contribution

Contributions to this project are welcome! If you have ideas for improvements, bug fixes or new features, <a href="" target="_blank">feel free to join</a>.

## Let's connect

-   Email

## License

Next.js Seed for ChatGPT Plugin system is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">MIT License</a>
