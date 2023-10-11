import { pluginConfigPaths, getApiDocs, PluginConfigPath } from '@/ai-plugin';
import { Plugin } from '@plug-ai/plug-ai-core';

const aiplug = new Plugin({
    configFilePath: pluginConfigPaths[PluginConfigPath.OAUTH],
    getDocs: getApiDocs,
});

const routeHandler = aiplug.handlePluginPaths.bind(aiplug);

export const canAccessProtectedRoutes = aiplug.canAccessAuthProtectedRoutes.bind(aiplug);
export { routeHandler as GET, routeHandler as POST };
