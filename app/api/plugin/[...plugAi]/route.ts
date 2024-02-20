import { getApiDocs } from '@/ai-plugin';
import { Plugin, PluginAuthType } from '@plug-ai/plug-ai-core';

const aiplug = new Plugin({
    authConfig: PluginAuthType.OAuth,
    getDocs: getApiDocs,
});

const routeHandler = aiplug.handlePluginPaths.bind(aiplug);

export const canAccessProtectedRoutes = aiplug.canAccessAuthProtectedRoutes.bind(aiplug);
export { routeHandler as GET, routeHandler as POST };
