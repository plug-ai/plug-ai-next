import path from 'path';

export enum PluginConfigPath {
    NO_AUTH = 'no-auth',
    OAUTH = 'oauth',
    SERVICE_HTTP = 'service-http',
}

export const pluginConfigPaths = {
    [PluginConfigPath.NO_AUTH]: path.join(process.cwd(), 'config', 'plugin-no-auth.yaml'),
    [PluginConfigPath.OAUTH]: path.join(process.cwd(), 'config', 'plugin-oauth.yaml'),
    [PluginConfigPath.SERVICE_HTTP]: path.join(process.cwd(), 'config', 'plugin-service-http-auth.yaml'),
};
