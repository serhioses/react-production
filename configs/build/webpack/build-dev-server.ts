import openBrowser from 'react-dev-utils/openBrowser';

import { Configuration } from 'webpack-dev-server';

export function buildDevServer(port: number): Configuration {
  return {
    port,
    historyApiFallback: true,
    liveReload: true,
    onListening(devServer) {
      const { options } = devServer;
      const { server } = options;

      let serverType = 'http';
      if (typeof server !== 'string' && server?.type) {
        serverType = server.type;
      }

      const host = options.host || 'localhost';

      openBrowser(`${serverType}://${host}:${port}`);
    },
  };
}
